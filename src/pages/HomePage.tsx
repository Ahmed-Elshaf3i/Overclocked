import { FC, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { PageLoader } from "@/components/ui/PageLoader";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { CountdownTimer } from "@/components/home/CountdownTimer";
import { TrustSignals } from "@/components/home/TrustSignals";
import { useProducts } from "@/hooks/useProducts";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/contexts/ToastContext";
import { useCountdown } from "@/hooks/useCountdown";
import { TIMING, PRODUCT_LIMITS, SUCCESS_MESSAGES } from "@/constants";

/**
 * HomePage component - Main landing page with product showcase
 */
export const HomePage: FC = () => {
  const navigate = useNavigate();

  // Hooks
  const {
    loading,
    getFlashSaleProducts,
    getBestSellingProducts,
    getExploreProducts,
  } = useProducts();
  const { addToWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  // Countdown timers
  const flashSaleCountdown = useCountdown({
    initialTime: { days: 3, hours: 23, minutes: 19, seconds: 56 },
  });

  const promoCountdown = useCountdown({
    initialTime: { days: 5, hours: 23, minutes: 59, seconds: 35 },
  });

  // Get products (memoized to prevent unnecessary recalculations)
  const flashSaleProducts = useMemo(
    () => getFlashSaleProducts(PRODUCT_LIMITS.FLASH_SALE),
    [getFlashSaleProducts]
  );
  const bestSellingProducts = useMemo(
    () => getBestSellingProducts(PRODUCT_LIMITS.BEST_SELLING),
    [getBestSellingProducts]
  );
  const exploreProducts = useMemo(
    () => getExploreProducts(PRODUCT_LIMITS.EXPLORE),
    [getExploreProducts]
  );

  // All products combined (for lookup)
  const allProducts = useMemo(
    () => [...flashSaleProducts, ...bestSellingProducts, ...exploreProducts],
    [flashSaleProducts, bestSellingProducts, exploreProducts]
  );

  // Handlers
  const handleWishlistToggle = (productId: string) => {
    const product = allProducts.find((p) => p.id === productId);
    if (!product) return;

    if (isInWishlist(productId)) {
      showToast("Product already in wishlist", "info");
    } else {
      addToWishlist(product);
      showToast(
        `${product.name} ${SUCCESS_MESSAGES.ADDED_TO_WISHLIST}`,
        "success"
      );
    }
  };

  const handleAddToCart = (productId: string) => {
    const product = allProducts.find((p) => p.id === productId);
    if (!product) return;

    addToCart(product, 1);
    showToast(`${product.name} ${SUCCESS_MESSAGES.ADDED_TO_CART}`, "success");
  };

  const handleQuickView = (_productId: string) => {
    showToast("Quick view - Coming Soon!", "info");
  };

  const handlePromoBuyNow = () => {
    // Directly reference the JBL Charge 5 Speaker (id: "11")
    const jblSpeaker = allProducts.find((p) => p.id === "11");

    if (jblSpeaker) {
      addToCart(jblSpeaker, 1);
      showToast(
        `${jblSpeaker.name} ${SUCCESS_MESSAGES.ADDED_TO_CART}`,
        "success"
      );
      setTimeout(() => navigate("/cart"), TIMING.NAVIGATION_DELAY);
    } else {
      // Fallback: If specific product not found, show error
      showToast("Product not available at the moment", "error");
      setTimeout(() => navigate("/products"), TIMING.NAVIGATION_DELAY);
    }
  };

  // Loading state
  if (loading) {
    return <PageLoader message="Loading products..." />;
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="border-b border-neutral-200">
        <div className="container-custom py-8">
          <HeroCarousel />
        </div>
      </section>

      {/* Flash Sales Section */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeader
            subtitle="Today's"
            title="Flash Sales"
            action={
              <div className="flex items-center gap-2">
                <div className="mr-8">
                  <CountdownTimer
                    time={flashSaleCountdown.time}
                    formatTimeValue={flashSaleCountdown.formatTimeValue}
                  />
                </div>
              </div>
            }
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {flashSaleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToWishlist={handleWishlistToggle}
                onAddToCart={handleAddToCart}
                onQuickView={handleQuickView}
                isInWishlist={isInWishlist(product.id)}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <Link to="/products">
              <Button variant="primary">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-custom">
        <hr className="border-neutral-200" />
      </div>

      {/* Best Selling Products Section */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeader
            subtitle="This Month"
            title="Best Selling Products"
            action={
              <Link to="/products">
                <Button variant="primary">View All</Button>
              </Link>
            }
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellingProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToWishlist={handleWishlistToggle}
                onAddToCart={handleAddToCart}
                onQuickView={handleQuickView}
                isInWishlist={isInWishlist(product.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-black text-white rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16">
              <div className="max-w-md mb-8 md:mb-0">
                <p className="text-success text-sm font-semibold mb-4">
                  Categories
                </p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Enhance Your
                  <br />
                  Music Experience
                </h2>

                {/* Countdown Circles */}
                <div className="flex gap-4 mb-8">
                  {[
                    {
                      value: promoCountdown.formattedTime.hours,
                      label: "Hours",
                    },
                    { value: promoCountdown.formattedTime.days, label: "Days" },
                    {
                      value: promoCountdown.formattedTime.minutes,
                      label: "Minutes",
                    },
                    {
                      value: promoCountdown.formattedTime.seconds,
                      label: "Seconds",
                    },
                  ].map((time, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-dark-bg-secondary text-black dark:text-dark-text-primary rounded-full w-16 h-16 flex flex-col items-center justify-center border border-transparent dark:border-dark-border-primary shadow-md dark:shadow-glow-subtle"
                    >
                      <div className="text-lg font-bold">{time.value}</div>
                      <div className="text-xs">{time.label}</div>
                    </div>
                  ))}
                </div>

                <Button
                  variant="primary"
                  className="bg-success hover:bg-green-600"
                  onClick={handlePromoBuyNow}
                >
                  Buy Now!
                </Button>
              </div>

              <div className="flex-shrink-0">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0c32ab64024057.5ac49b57aa614.jpg"
                  alt="JBL Speaker"
                  className="w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Products Section */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeader
            subtitle="Our Products"
            title="Explore Our Products"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {exploreProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToWishlist={handleWishlistToggle}
                onAddToCart={handleAddToCart}
                onQuickView={handleQuickView}
                isInWishlist={isInWishlist(product.id)}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <Link to="/products">
              <Button variant="primary">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <TrustSignals />
    </div>
  );
};
