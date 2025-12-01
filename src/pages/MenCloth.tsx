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
  shirts: Product[];
  shoes: Product[];
  watches: Product[];
}

export const MensFashion = () => {
  const [products, setProducts] = useState<CategoryProducts>({
    shirts: [],
    shoes: [],
    watches: [],
  });
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    const fetchMensProducts = async () => {
      try {
        setLoading(true);
        const categories = ["mens-shirts", "mens-shoes", "mens-watches"];

        const responses = await Promise.all(
          categories.map((category) =>
            fetch(`https://dummyjson.com/products/category/${category}`).then(
              (res) => res.json()
            )
          )
        );

        setProducts({
          shirts: responses[0].products || [],
          shoes: responses[1].products || [],
          watches: responses[2].products || [],
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMensProducts();
  }, []);

  const getAllProducts = () => {
    return [...products.shirts, ...products.shoes, ...products.watches];
  };

  const getFilteredProducts = () => {
    if (activeCategory === "all") {
      return getAllProducts();
    }
    return products[activeCategory as keyof CategoryProducts] || [];
  };

  const categories = [
    { id: "all", name: "All Products", count: getAllProducts().length },
    { id: "shirts", name: "Shirts", count: products.shirts.length },
    { id: "shoes", name: "Shoes", count: products.shoes.length },
    { id: "watches", name: "Watches", count: products.watches.length },
  ];

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading men's collection...</p>
        </div>
      </div>
    );
  }

  const filteredProducts = getFilteredProducts();

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Men's Fashion</h1>
        <p className={styles.heroSubtitle}>
          Elevate your style with our premium collection
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
