import { FC, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HeartIcon, TruckIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { Rating } from '@/components/ui/Rating';
import { ProductCard } from '@/components/ui/ProductCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useCart } from '@/contexts/CartContext';
import { useProducts } from '@/hooks/useProducts';

// ProductDetailPage component - Product detail with image gallery
export const ProductDetailPage: FC = () => {
  // Get product ID from URL params
  const { id } = useParams<{ id: string }>();
  
  // Get products using the custom hook
  const { getProductById, getRelatedProducts, loading } = useProducts();
  
  // Get cart context
  const { addToCart } = useCart();
  
  // Get product data dynamically
  const product = id ? getProductById(id) : undefined;
  
  // Get related products from the same category
  const relatedProducts = id ? getRelatedProducts(id, 4) : [];
  
  // State for selected image, color, size, quantity
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || 'M');
  const [quantity, setQuantity] = useState(1);
  
  // Handle add to cart
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      alert(`${product.name} added to cart!`);
    }
  };
  
  // Loading state
  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }
  
  // Product not found
  if (!product) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">
            The product you're looking for doesn't exist.
          </p>
          <Link to="/">
            <Button variant="primary">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="container-custom py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-black">{product.category}</Link>
          <span>/</span>
          <span className="text-black">{product.name}</span>
        </div>
      </div>
      
      {/* Product Detail Section */}
      <section className="py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Image Gallery */}
            <div className="flex gap-4">
              {/* Thumbnail Images */}
              {product.images && product.images.length > 1 && (
                <div className="flex flex-col gap-4">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 bg-neutral-100 rounded overflow-hidden ${
                        selectedImage === index ? 'ring-2 ring-accent' : ''
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
              
              {/* Main Image */}
              <div className="flex-1 bg-neutral-100 rounded-lg overflow-hidden aspect-square">
                <img
                  src={product.images?.[selectedImage] || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Right Side - Product Info */}
            <div>
              {/* Product Title */}
              <h1 className="text-3xl font-semibold mb-3">{product.name}</h1>
              
              {/* Rating & Stock */}
              <div className="flex items-center gap-4 mb-4">
                <Rating rating={product.rating} reviews={product.reviews} />
                <span className="text-gray-400">|</span>
                <span className={`text-sm ${product.inStock ? 'text-success' : 'text-red-500'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              
              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-semibold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-accent font-semibold">
                    Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>
              
              {/* Description */}
              <p className="text-gray-700 mb-6 pb-6 border-b border-neutral-200">
                {product.description}
              </p>
              
              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-medium">Colours:</span>
                    <div className="flex gap-2">
                      {product.colors.map((color, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedColor(color)}
                          className={`w-8 h-8 rounded-full border-2 transition-all ${
                            selectedColor === color ? 'border-black scale-110' : 'border-transparent'
                          }`}
                          style={{ backgroundColor: color }}
                          aria-label={`Select color ${color}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-medium">Size:</span>
                    <div className="flex gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 border rounded transition-all ${
                            selectedSize === size
                              ? 'bg-accent text-white border-accent'
                              : 'border-neutral-300 hover:border-black'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Quantity & Buy Actions */}
              <div className="flex flex-wrap gap-4 mb-6">
                {/* Quantity Selector */}
                <div className="flex items-center border border-neutral-300 rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-neutral-100 transition-colors"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-white text-center border-x border-neutral-300 py-3 focus:outline-none"
                    min="1"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-neutral-100 transition-colors"
                  >
                    +
                  </button>
                </div>
                
                {/* Buy Now Button */}
                <Button 
                  variant="primary" 
                  onClick={handleAddToCart} 
                  className="px-12"
                  disabled={!product.inStock}
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
                
                {/* Wishlist Button */}
                <button
                  className="p-3 border border-neutral-300 rounded hover:bg-neutral-100 transition-colors"
                  aria-label="Add to wishlist"
                >
                  <HeartIcon className="w-6 h-6" />
                </button>
              </div>
              
              {/* Delivery Info */}
              <div className="border border-neutral-300 rounded-lg overflow-hidden">
                <div className="p-4 border-b border-neutral-300">
                  <div className="flex items-center gap-3">
                    <TruckIcon className="w-8 h-8" />
                    <div>
                      <h4 className="font-medium">Free Delivery</h4>
                      <p className="text-sm text-gray-600 underline cursor-pointer">
                        Enter your postal code for Delivery Availability
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3">
                    <ArrowPathIcon className="w-8 h-8" />
                    <div>
                      <h4 className="font-medium">Return Delivery</h4>
                      <p className="text-sm text-gray-600">
                        Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Items Section */}
      {relatedProducts.length > 0 && (
        <section className="py-16">
          <div className="container-custom">
            <SectionHeader 
              subtitle="Related Item" 
              title={`More from ${product.category}`} 
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};