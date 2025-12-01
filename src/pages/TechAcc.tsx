import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css_modules/Laptops.module.css";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface CategoryProducts {
  laptops: Product[];
  smartphones: Product[];
  tablets: Product[];
  mobileAccessories: Product[];
}

export const TechAcc = () => {
  const [products, setProducts] = useState<CategoryProducts>({
    laptops: [],
    smartphones: [],
    tablets: [],
    mobileAccessories: [],
  });
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    const fetchTechProducts = async () => {
      try {
        setLoading(true);
        const categories = [
          "laptops",
          "smartphones",
          "tablets",
          "mobile-accessories",
        ];

        const responses = await Promise.all(
          categories.map((category) =>
            fetch(`https://dummyjson.com/products/category/${category}`).then(
              (res) => res.json()
            )
          )
        );

        setProducts({
          laptops: responses[0].products || [],
          smartphones: responses[1].products || [],
          tablets: responses[2].products || [],
          mobileAccessories: responses[3].products || [],
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTechProducts();
  }, []);

  const getAllProducts = () => {
    return [
      ...products.laptops,
      ...products.smartphones,
      ...products.tablets,
      ...products.mobileAccessories,
    ];
  };

  const getFilteredProducts = () => {
    if (activeCategory === "all") {
      return getAllProducts();
    }
    return products[activeCategory as keyof CategoryProducts] || [];
  };

  const categories = [
    { id: "all", name: "All Tech", count: getAllProducts().length },
    { id: "laptops", name: "Laptops", count: products.laptops.length },
    {
      id: "smartphones",
      name: "Smartphones",
      count: products.smartphones.length,
    },
    { id: "tablets", name: "Tablets", count: products.tablets.length },
    {
      id: "mobileAccessories",
      name: "Accessories",
      count: products.mobileAccessories.length,
    },
  ];

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading tech products...</p>
        </div>
      </div>
    );
  }

  const filteredProducts = getFilteredProducts();

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Tech & Electronics</h1>
        <p className={styles.heroSubtitle}>
          Discover the latest in technology and innovation
        </p>
      </div>

      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>Categories</h2>
          <div className={styles.categoryList}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`${styles.categoryBtn} ${
                  activeCategory === category.id ? styles.active : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className={styles.categoryName}>{category.name}</span>
                <span className={styles.categoryCount}>{category.count}</span>
              </button>
            ))}
          </div>
        </aside>

        <main className={styles.main}>
          <div className={styles.header}>
            <h2 className={styles.sectionTitle}>
              {categories.find((c) => c.id === activeCategory)?.name}
            </h2>
            <p className={styles.productCount}>
              {filteredProducts.length} products
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No products found in this category.</p>
            </div>
          ) : (
            <div className={styles.productGrid}>
              {filteredProducts.map((product) => (
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  className={styles.productCard}
                >
                  <div className={styles.imageWrapper}>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className={styles.productImage}
                      loading="lazy"
                    />
                    {product.discountPercentage > 0 && (
                      <span className={styles.badge}>
                        -{Math.round(product.discountPercentage)}%
                      </span>
                    )}
                    {product.stock < 10 && product.stock > 0 && (
                      <span className={styles.lowStock}>
                        Only {product.stock} left
                      </span>
                    )}
                  </div>
                  <div className={styles.productInfo}>
                    <p className={styles.productBrand}>{product.brand}</p>
                    <h3 className={styles.productTitle}>{product.title}</h3>
                    <div className={styles.rating}>
                      <span className={styles.stars}>
                        {"★".repeat(Math.round(product.rating))}
                        {"☆".repeat(5 - Math.round(product.rating))}
                      </span>
                      <span className={styles.ratingValue}>
                        {product.rating.toFixed(1)}
                      </span>
                    </div>
                    <div className={styles.priceWrapper}>
                      <span className={styles.price}>
                        ${product.price.toFixed(2)}
                      </span>
                      {product.discountPercentage > 0 && (
                        <span className={styles.originalPrice}>
                          $
                          {(
                            product.price /
                            (1 - product.discountPercentage / 100)
                          ).toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
