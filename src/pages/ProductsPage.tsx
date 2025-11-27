import { FC, useState, useMemo } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import {
  FunnelIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export const ProductsPage: FC = () => {
  const { products, loading } = useProducts();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("default");
  const [priceRange, setPriceRange] = useState<string>("all");

  // Get unique categories
  const categories = useMemo(() => {
    return ["all", ...Array.from(new Set(products.map((p) => p.category)))];
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Price range filter
    if (priceRange !== "all") {
      const ranges: Record<string, [number, number]> = {
        "0-50": [0, 50],
        "50-100": [50, 100],
        "100-500": [100, 500],
        "500+": [500, Infinity],
      };
      const [min, max] = ranges[priceRange] || [0, Infinity];
      result = result.filter(
        (product) => product.price >= min && product.price < max
      );
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "reviews":
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [products, searchQuery, selectedCategory, sortBy, priceRange]);

  // Loading state
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
    <div className="w-full min-h-screen">
      {/* Header */}
      <div className="border-b border-neutral-200">
        <div className="container-custom py-12">
          <h1 className="text-4xl font-bold mb-2">All Products</h1>
          <p className="text-gray-600">
            Discover our complete collection of {products.length} products
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white border-b border-neutral-200 sticky top-0 z-10 shadow-sm">
        <div className="container-custom py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md w-full">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex items-center gap-2">
                <FunnelIcon className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">
                  Filters:
                </span>
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2.5 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm bg-white cursor-pointer hover:border-gray-300 transition-colors"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all"
                      ? "All Categories"
                      : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>

              {/* Price Range Filter */}
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-2.5 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm bg-white cursor-pointer hover:border-gray-300 transition-colors"
              >
                <option value="all">All Prices</option>
                <option value="0-50">$0 - $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="100-500">$100 - $500</option>
                <option value="500+">$500+</option>
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2.5 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm bg-white cursor-pointer hover:border-gray-300 transition-colors"
              >
                <option value="default">Sort By: Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>

          {/* Active Filters Display */}
          {(searchQuery || selectedCategory !== "all" || priceRange !== "all" || sortBy !== "default") && (
            <div className="mt-4 flex flex-wrap gap-2 items-center">
              <span className="text-sm text-gray-600">Active filters:</span>
              {searchQuery && (
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full flex items-center gap-2">
                  Search: "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery("")}
                    className="hover:text-accent-hover"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedCategory !== "all" && (
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full flex items-center gap-2">
                  {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className="hover:text-accent-hover"
                  >
                    ×
                  </button>
                </span>
              )}
              {priceRange !== "all" && (
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full flex items-center gap-2">
                  ${priceRange}
                  <button
                    onClick={() => setPriceRange("all")}
                    className="hover:text-accent-hover"
                  >
                    ×
                  </button>
                </span>
              )}
              {sortBy !== "default" && (
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full flex items-center gap-2">
                  Sort: {sortBy}
                  <button
                    onClick={() => setSortBy("default")}
                    className="hover:text-accent-hover"
                  >
                    ×
                  </button>
                </span>
              )}
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setPriceRange("all");
                  setSortBy("default");
                }}
                className="text-sm text-accent hover:text-accent-hover underline font-medium"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container-custom py-12">
        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-black">{filteredProducts.length}</span> of{" "}
            <span className="font-semibold text-black">{products.length}</span> products
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-gray-300 mb-6">
              <MagnifyingGlassIcon className="w-20 h-20 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search query
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setPriceRange("all");
                setSortBy("default");
              }}
              className="inline-block px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};