import { FC, useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/ui/ProductCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Product } from '@/types';

// WishlistPage component - Wishlist with product management
export const WishlistPage: FC = () => {
  // Mock wishlist data (in real app, use React Query)
  const [wishlistItems, setWishlistItems] = useState<Product[]>([
    {
      id: '1',
      name: 'Gucci duffle bag',
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4.5,
      reviews: 65,
      image: 'https://via.placeholder.com/300x300?text=Bag',
      category: 'Fashion',
      inStock: true,
    },
    {
      id: '2',
      name: 'RGB liquid CPU Cooler',
      price: 160,
      originalPrice: 170,
      rating: 4.5,
      reviews: 65,
      image: 'https://via.placeholder.com/300x300?text=Cooler',
      category: 'Electronics',
      inStock: true,
    },
    {
      id: '3',
      name: 'GP11 Shooter USB Gamepad',
      price: 660,
      rating: 4.5,
      reviews: 55,
      image: 'https://via.placeholder.com/300x300?text=Gamepad',
      category: 'Gaming',
      inStock: true,
    },
    {
      id: '4',
      name: 'Quilted Satin Jacket',
      price: 660,
      rating: 4.5,
      reviews: 55,
      image: 'https://via.placeholder.com/300x300?text=Jacket',
      category: 'Fashion',
      inStock: true,
    },
  ]);
  
  // Just For You products (recommendations)
  const recommendedProducts: Product[] = [
    {
      id: '5',
      name: 'ASUS FHD Gaming Laptop',
      price: 700,
      originalPrice: 1000,
      discount: 35,
      rating: 5,
      reviews: 325,
      image: 'https://via.placeholder.com/300x300?text=Laptop',
      category: 'Electronics',
      inStock: true,
    },
    {
      id: '6',
      name: 'IPS LCD Gaming Monitor',
      price: 370,
      originalPrice: 400,
      rating: 5,
      reviews: 99,
      image: 'https://via.placeholder.com/300x300?text=Monitor',
      category: 'Electronics',
      inStock: true,
    },
    {
      id: '7',
      name: 'HAVIT HV-G92 Gamepad',
      price: 120,
      rating: 5,
      reviews: 88,
      image: 'https://via.placeholder.com/300x300?text=Gamepad',
      category: 'Gaming',
      inStock: true,
      isNew: true,
    },
    {
      id: '8',
      name: 'AK-900 Wired Keyboard',
      price: 960,
      rating: 4,
      reviews: 75,
      image: 'https://via.placeholder.com/300x300?text=Keyboard',
      category: 'Electronics',
      inStock: true,
    },
  ];
  
  // Handle move all to cart
  const handleMoveAllToBag = (): void => {
    console.log('Moving all items to bag');
    alert('All items moved to cart!');
    // In real app: add all items to cart
  };
  
  // Handle remove from wishlist
  const handleRemove = (productId: string): void => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== productId));
  };
  
  // Handle add to cart
  const handleAddToCart = (productId: string): void => {
    console.log('Adding to cart:', productId);
    alert('Product added to cart!');
    // In real app: add to cart
  };
  
  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="container-custom py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <a href="/" className="hover:text-black">Home</a>
          <span>/</span>
          <span className="text-black">Wishlist</span>
        </div>
      </div>
      
      {/* Wishlist Section */}
      <section className="py-8">
        <div className="container-custom">
          {/* Header with count and move all button */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-medium">Wishlist ({wishlistItems.length})</h1>
            <Button variant="outline" onClick={handleMoveAllToBag}>
              Move All To Bag
            </Button>
          </div>
          
          {wishlistItems.length === 0 ? (
            /* Empty Wishlist Message */
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
              <p className="text-gray-600 mb-6">Start adding products you love!</p>
              <a href="/">
                <Button variant="primary">Continue Shopping</Button>
              </a>
            </div>
          ) : (
            /* Wishlist Product Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {wishlistItems.map((product) => (
                <div key={product.id} className="relative group">
                  {/* Product Card */}
                  <div className="bg-neutral-100 rounded overflow-hidden mb-4">
                    {/* Product Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <a href={`/product/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </a>
                      
                      {/* Discount Badge */}
                      {product.discount && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded">
                            -{product.discount}%
                          </span>
                        </div>
                      )}
                      
                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemove(product.id)}
                        className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
                        aria-label="Remove from wishlist"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </div>
                    
                    {/* Add to Cart Button */}
                    <button
                      onClick={() => handleAddToCart(product.id)}
                      className="w-full bg-black text-white py-2 text-center hover:bg-neutral-800 transition-colors"
                    >
                      Add To Cart
                    </button>
                  </div>
                  
                  {/* Product Info */}
                  <div>
                    <a href={`/product/${product.id}`}>
                      <h3 className="font-medium mb-2 hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                    </a>
                    <div className="flex items-center gap-3">
                      <span className="text-accent font-semibold">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through text-sm">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Just For You Section */}
      <section className="py-8 pb-16">
        <div className="container-custom">
          <SectionHeader
            subtitle=""
            title="Just For You"
            action={<Button variant="outline">See All</Button>}
          />
          
          {/* Recommended Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

