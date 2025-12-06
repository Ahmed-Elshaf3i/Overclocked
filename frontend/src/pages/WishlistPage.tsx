import { FC } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/ui/ProductCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/contexts/ToastContext';
import { useProducts } from '@/hooks/useProducts';

// WishlistPage component - Wishlist with product management
export const WishlistPage: FC = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const { getExploreProducts } = useProducts();
  
  // Get recommended products
  const recommendedProducts = getExploreProducts(4);
  
  // Handle move all to cart
  const handleMoveAllToBag = (): void => {
    if (wishlistItems.length === 0) {
      showToast('Your wishlist is empty', 'info');
      return;
    }
    
    wishlistItems.forEach((item) => {
      addToCart(item.product, 1);
    });
    clearWishlist();
    showToast('All items moved to cart!', 'success');
  };
  
  // Handle remove from wishlist
  const handleRemove = (productId: string): void => {
    removeFromWishlist(productId);
    showToast('Product removed from wishlist', 'success');
  };
  
  // Handle add to cart
  const handleAddToCart = (productId: string): void => {
    const item = wishlistItems.find((w) => w.product.id === productId);
    if (item) {
      addToCart(item.product, 1);
      showToast(`${item.product.name} added to cart!`, 'success');
    }
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
              {wishlistItems.map((item) => (
                <div key={item.product.id} className="relative group">
                  {/* Product Card */}
                  <div className="bg-neutral-100 rounded overflow-hidden mb-4">
                    {/* Product Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <Link to={`/product/${item.product.id}`}>
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                      
                      {/* Discount Badge */}
                      {item.product.discount && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded">
                            -{item.product.discount}%
                          </span>
                        </div>
                      )}
                      
                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemove(item.product.id)}
                        className="absolute top-3 right-3 w-8 h-8 bg-white dark:bg-dark-bg-elevated rounded-full flex items-center justify-center text-gray-700 dark:text-dark-text-primary hover:bg-red-500 dark:hover:bg-dark-accent-error hover:text-white transition-all duration-300 shadow-md dark:shadow-glow-subtle hover:shadow-lg"
                        aria-label="Remove from wishlist"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </div>
                    
                    {/* Add to Cart Button */}
                    <button
                      onClick={() => handleAddToCart(item.product.id)}
                      className="w-full bg-black dark:bg-dark-bg-elevated text-white py-2 text-center hover:bg-neutral-800 dark:hover:bg-dark-accent-primary transition-all duration-300"
                    >
                      Add To Cart
                    </button>
                  </div>
                  
                  {/* Product Info */}
                  <div>
                    <Link to={`/product/${item.product.id}`}>
                      <h3 className="font-medium mb-2 hover:text-accent transition-colors">
                        {item.product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-3">
                      <span className="text-accent font-semibold">${item.product.price}</span>
                      {item.product.originalPrice && (
                        <span className="text-gray-500 line-through text-sm">
                          ${item.product.originalPrice}
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

