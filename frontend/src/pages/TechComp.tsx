import { useEffect, useState } from "react";
import { Product as AppProduct } from "@/types";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useToast } from "@/contexts/ToastContext";
import { ProductCard } from "@/components/ui/ProductCard";
import styles from "../css_modules/Laptops.module.css";

interface RemoteProduct {
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
  laptops: RemoteProduct[];
  smartphones: RemoteProduct[];
  tablets: RemoteProduct[];
  mobileAccessories: RemoteProduct[];
}

export const TechComp = () => {
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();

  const [products, setProducts] = useState<CategoryProducts>({
    laptops: [],
    smartphones: [],
    tablets: [],
    mobileAccessories: [],
  });
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    const abortController = new AbortController();

    const fetchTechProducts = async () => {
      try {
        setLoading(true);
        const categories = [
          "laptops",
          "smartphones",
          "tablets",
          "mobile-accessories",
        ];

        // Check localStorage cache first
        const cached = localStorage.getItem("techProducts");
        const cacheTime = localStorage.getItem("techProductsCacheTime");
        const oneHourAgo = Date.now() - 3600000;

        if (cached && cacheTime && parseInt(cacheTime) > oneHourAgo) {
          setProducts(JSON.parse(cached));
          setLoading(false);
          return;
        }

        const responses = await Promise.all(
          categories.map((category) =>
            fetch(`https://dummyjson.com/products/category/${category}`, {
              signal: abortController.signal,
            }).then((res) => res.json())
          )
        );

        const data = {
          laptops: responses[0].products || [],
          smartphones: responses[1].products || [],
          tablets: responses[2].products || [],
          mobileAccessories: responses[3].products || [],
        };

        setProducts(data);
        // Cache the results
        localStorage.setItem("techProducts", JSON.stringify(data));
        localStorage.setItem("techProductsCacheTime", Date.now().toString());
      } catch (error: any) {
        if (error.name !== "AbortError") {
          console.error("Error fetching products:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTechProducts();

    return () => abortController.abort();
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
              {filteredProducts.map((rp) => {
                // map remote product to app Product shape
                const mapped: AppProduct = {
                  id: String(rp.id),
                  name: rp.title,
                  price: rp.price,
                  originalPrice: rp.discountPercentage
                    ? Number(
                        (rp.price / (1 - rp.discountPercentage / 100)).toFixed(
                          2
                        )
                      )
                    : undefined,
                  discount: rp.discountPercentage,
                  rating: rp.rating,
                  reviews: Math.round(rp.rating * 10),
                  image: rp.thumbnail,
                  images: rp.images,
                  category: rp.category,
                  description: rp.description,
                  colors: [],
                  sizes: [],
                  inStock: rp.stock > 0,
                };

                return (
                  <ProductCard
                    key={mapped.id}
                    product={mapped}
                    onAddToWishlist={() => {
                      addToWishlist(mapped);
                      showToast(`${mapped.name} added to wishlist!`, "success");
                    }}
                    onAddToCart={() => {
                      addToCart(mapped, 1);
                      showToast(`${mapped.name} added to cart!`, "success");
                    }}
                    isInWishlist={isInWishlist(mapped.id)}
                  />
                );
              })}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
