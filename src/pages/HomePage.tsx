import { FC, useState, useEffect, useMemo } from "react";import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import {
  TruckIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { useProducts } from "@/hooks/useProducts";

// Carousel slide interface
interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  discount: string;
  image: string;
  bgColor: string;
  link: string;
}

// HomePage component - Main landing page
export const HomePage: FC = () => {
  // Get products using the custom hook
  const {
    loading,
    getFlashSaleProducts,
    getBestSellingProducts,
    getExploreProducts,
  } = useProducts();

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Countdown timer state for Flash Sales
  const [flashSaleTime, setFlashSaleTime] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  // Countdown timer state for Promotional Banner
  const [promoTime, setPromoTime] = useState({
    hours: 23,
    days: 5,
    minutes: 59,
    seconds: 35,
  });

  // Get dynamic product data
  const flashSaleProducts = useMemo(() => getFlashSaleProducts(4), [getFlashSaleProducts]);
  const bestSellingProducts = useMemo(() => getBestSellingProducts(4), [getBestSellingProducts]);
  const exploreProducts = useMemo(() => getExploreProducts(8), [getExploreProducts]);


  // Carousel slides data (static as requested)
  const carouselSlides: CarouselSlide[] = [
    {
      id: 1,
      title: "Up to 10% off Voucher",
      subtitle: "iPhone 17 Series",
      discount: "10%",
      image:
        "https://www.bug.hr/img/iphone-18-pro-mogao-bi-dobiti-prozirnu-straznjicu_pBZ54x.jpg",
      bgColor: "bg-black",
      link: "/products/iphone",
    },
    {
      id: 2,
      title: "Summer Sale 2024",
      subtitle: "MacBook Pro M3",
      discount: "15%",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90",
      bgColor: "bg-gradient-to-r from-gray-900 to-gray-700",
      link: "/products/macbook",
    },
    {
      id: 3,
      title: "Gaming Week Special",
      subtitle: "PlayStation 5",
      discount: "20%",
      image:
        "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
      bgColor: "bg-gradient-to-r from-blue-900 to-indigo-800",
      link: "/products/ps5",
    },
    {
      id: 4,
      title: "Wireless Freedom",
      subtitle: "AirPods Pro 2",
      discount: "12%",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90",
      bgColor: "bg-gradient-to-r from-purple-900 to-pink-800",
      link: "/products/airpods",
    },
    {
      id: 5,
      title: "Smart Home Deal",
      subtitle: "Apple Watch Series 9",
      discount: "18%",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT5J3ref_VW_34FR+watch-49-titanium-ultra_VW_34FR+watch-face-49-ocean-ultra_VW_34FR?wid=1000&hei=1000&fmt=png-alpha",
      bgColor: "bg-gradient-to-r from-teal-900 to-cyan-800",
      link: "/products/apple-watch",
    },
  ];

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselSlides.length]);

  // Flash Sale Countdown Timer - Updates every second
  useEffect(() => {
    const interval = setInterval(() => {
      setFlashSaleTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              } else {
                clearInterval(interval);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Promotional Banner Countdown Timer - Updates every second
  useEffect(() => {
    const interval = setInterval(() => {
      setPromoTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              } else {
                clearInterval(interval);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Navigation handlers
  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = (): void => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
    );
  };

  const goToNextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  // Categories for sidebar
  const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  // Show loading state
  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section with Category Sidebar */}
      <section className="border-b border-neutral-200">
        <div className="container-custom py-8">
          <div className="flex gap-8">
            {/* Category Sidebar */}
            <aside className="hidden lg:block w-64 border-r border-neutral-200 pr-8">
              <nav className="space-y-3">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    to={`/category/${category
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")}`}
                    className="flex items-center justify-between text-gray-700 hover:text-black transition-colors py-2"
                  >
                    <span>{category}</span>
                    {(category === "Woman's Fashion" ||
                      category === "Men's Fashion") && (
                      <ArrowRightIcon className="w-4 h-4" />
                    )}
                  </Link>
                ))}
              </nav>
            </aside>

            {/* Hero Carousel */}
            <div className="flex-1 relative overflow-hidden rounded-lg">
              {/* Carousel Slides Container */}
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselSlides.map((slide) => (
                  <div
                    key={slide.id}
                    className={`min-w-full ${slide.bgColor} text-white`}
                  >
                    <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 min-h-[400px]">
                      <div className="max-w-md mb-8 md:mb-0 z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <svg
                            className="w-10 h-10"
                            viewBox="0 0 40 40"
                            fill="none"
                          >
                            <path
                              d="M20 0L25 15H40L28 24L33 40L20 30L7 40L12 24L0 15H15L20 0Z"
                              fill="white"
                            />
                          </svg>
                          <span className="text-sm font-medium">
                            {slide.subtitle}
                          </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                          {slide.title}
                        </h1>

                        {slide.discount && (
                          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg mb-6">
                            <span className="text-2xl font-bold">
                              Save up to {slide.discount}
                            </span>
                          </div>
                        )}

                        <Link
                          to={slide.link}
                          className="inline-flex items-center gap-2 text-white underline hover:no-underline transition-all group"
                        >
                          Shop Now
                          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>

                      <div className="flex-shrink-0 relative">
                        <img
                          src={slide.image}
                          alt={slide.subtitle}
                          className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all z-20"
                aria-label="Previous slide"
              >
                <ChevronLeftIcon className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={goToNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all z-20"
                aria-label="Next slide"
              >
                <ChevronRightIcon className="w-6 h-6 text-white" />
              </button>

              {/* Carousel Dots Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center gap-2 z-20">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all ${
                      index === currentSlide
                        ? "w-8 h-3 bg-accent rounded-full"
                        : "w-3 h-3 bg-white/50 hover:bg-white/70 rounded-full"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
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
                {/* Countdown Timer */}
                <div className="flex items-center gap-3 mr-8">
                  <div className="text-center">
                    <div className="text-xs font-medium mb-1">Days</div>
                    <div className="text-3xl font-bold">
                      {String(flashSaleTime.days).padStart(2, "0")}
                    </div>
                  </div>
                  <span className="text-accent text-2xl font-bold">:</span>
                  <div className="text-center">
                    <div className="text-xs font-medium mb-1">Hours</div>
                    <div className="text-3xl font-bold">
                      {String(flashSaleTime.hours).padStart(2, "0")}
                    </div>
                  </div>
                  <span className="text-accent text-2xl font-bold">:</span>
                  <div className="text-center">
                    <div className="text-xs font-medium mb-1">Minutes</div>
                    <div className="text-3xl font-bold">
                      {String(flashSaleTime.minutes).padStart(2, "0")}
                    </div>
                  </div>
                  <span className="text-accent text-2xl font-bold">:</span>
                  <div className="text-center">
                    <div className="text-xs font-medium mb-1">Seconds</div>
                    <div className="text-3xl font-bold">
                      {String(flashSaleTime.seconds).padStart(2, "0")}
                    </div>
                  </div>
                </div>

                {/* Carousel Navigation */}
                <div className="flex gap-2">
                  <button
                    className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors"
                    aria-label="Previous products"
                  >
                    <ChevronLeftIcon className="w-5 h-5" />
                  </button>
                  <button
                    className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors"
                    aria-label="Next products"
                  >
                    <ChevronRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            }
          />

          {/* Product Grid - Dynamic */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {flashSaleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* View All Button */}
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

          {/* Product Grid - Dynamic */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
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
                      value: String(promoTime.hours).padStart(2, "0"),
                      label: "Hours",
                    },
                    {
                      value: String(promoTime.days).padStart(2, "0"),
                      label: "Days",
                    },
                    {
                      value: String(promoTime.minutes).padStart(2, "0"),
                      label: "Minutes",
                    },
                    {
                      value: String(promoTime.seconds).padStart(2, "0"),
                      label: "Seconds",
                    },
                  ].map((time, index) => (
                    <div
                      key={index}
                      className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center"
                    >
                      <div className="text-lg font-bold">{time.value}</div>
                      <div className="text-xs">{time.label}</div>
                    </div>
                  ))}
                </div>

                <Button
                  variant="primary"
                  className="bg-success hover:bg-green-600"
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
            action={
              <div className="flex gap-2">
                <button
                  className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors"
                  aria-label="Previous products"
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <button
                  className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors"
                  aria-label="Next products"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </div>
            }
          />

          {/* Product Grid - Dynamic */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {exploreProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center">
            <Link to="/products">
              <Button variant="primary">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Delivery */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                <div className="absolute inset-0 rounded-full bg-gray-200 dark:bg-dark-bg-secondary"></div>
                <div className="absolute inset-2 rounded-full bg-accent/30 group-hover:bg-accent/40 transition-colors"></div>
                <div className="absolute inset-4 rounded-full bg-accent flex items-center justify-center group-hover:bg-accent-hover transition-colors">
                  <TruckIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-dark-text-primary">
                FREE AND FAST DELIVERY
              </h3>
              <p className="text-sm text-gray-600 dark:text-dark-text-tertiary">
                Free delivery for all orders over $140
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                <div className="absolute inset-0 rounded-full bg-gray-200 dark:bg-dark-bg-secondary"></div>
                <div className="absolute inset-2 rounded-full bg-accent/30 group-hover:bg-accent/40 transition-colors"></div>
                <div className="absolute inset-4 rounded-full bg-accent flex items-center justify-center group-hover:bg-accent-hover transition-colors">
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-dark-text-primary">
                24/7 CUSTOMER SERVICE
              </h3>
              <p className="text-sm text-gray-600 dark:text-dark-text-tertiary">
                Friendly 24/7 customer support
              </p>
            </div>

            {/* Money Back Guarantee */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                <div className="absolute inset-0 rounded-full bg-gray-200 dark:bg-dark-bg-secondary"></div>
                <div className="absolute inset-2 rounded-full bg-accent/30 group-hover:bg-accent/40 transition-colors"></div>
                <div className="absolute inset-4 rounded-full bg-accent flex items-center justify-center group-hover:bg-accent-hover transition-colors">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-dark-text-primary">
                MONEY BACK GUARANTEE
              </h3>
              <p className="text-sm text-gray-600 dark:text-dark-text-tertiary">
                We return money within 30 days
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};