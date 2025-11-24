import { FC } from 'react';
import { EyeIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { Badge } from './Badge';
import { Rating } from './Rating';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/contexts/ToastContext';

// ProductCard component props interface
interface ProductCardProps {
  product: Product;
  onQuickView?: (productId: string) => void;
}

// Reusable Product Card component
export const ProductCard: FC<ProductCardProps> = ({
  product,
  onQuickView,
}) => {
  // Use cart context
  const { addToCart } = useCart();
  const { showToast } = useToast();

  // Calculate discount percentage
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  // Handle add to cart
  const handleAddToCart = (): void => {
    addToCart(product, 1);
    showToast(`${product.name} added to cart!`, 'success');
  };
  
  return (
    <div className="group relative bg-neutral-100 dark:bg-dark-bg-secondary rounded overflow-hidden border border-transparent dark:border-dark-border-primary hover:dark:border-dark-border-secondary transition-all duration-300">
      {/* Product Image Container */}
      <div className="relative aspect-square overflow-hidden bg-white dark:bg-dark-bg-tertiary">
        {/* Product Link */}
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {/* Badges - Top Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {discountPercent > 0 && (
            <Badge variant="discount">-{discountPercent}%</Badge>
          )}
          {product.isNew && <Badge variant="new">NEW</Badge>}
        </div>
        
        {/* Action Icons - Top Right */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {/* Quick View Button */}
          <button
            onClick={() => onQuickView?.(product.id)}
            className="w-8 h-8 bg-white dark:bg-dark-bg-elevated rounded-full flex items-center justify-center hover:bg-accent dark:hover:bg-dark-accent-primary hover:text-white transition-all duration-300 shadow-md dark:shadow-glow-subtle"
            aria-label="Quick view"
          >
            <EyeIcon className="w-5 h-5 text-gray-900 dark:text-dark-text-primary" />
          </button>
        </div>
        
        {/* Add to Cart Button - Appears on Hover */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-0 left-0 right-0 bg-black dark:bg-dark-accent-primary text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer dark:shadow-glow-red hover:bg-accent dark:hover:bg-red-700 flex items-center justify-center gap-2"
          aria-label="Add to cart"
        >
          <ShoppingCartIcon className="w-5 h-5" />
          <span className="font-medium">Add To Cart</span>
        </button>
      </div>
      
      {/* Product Info */}
      <div className="p-4 bg-neutral-100 dark:bg-dark-bg-secondary">
        {/* Product Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-black dark:text-dark-text-primary mb-2 hover:text-accent dark:hover:text-dark-accent-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        {/* Price */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-accent dark:text-dark-accent-primary font-semibold">${product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-500 dark:text-dark-text-tertiary line-through text-sm">
              ${product.originalPrice}
            </span>
          )}
        </div>
        
        {/* Rating */}
        <Rating rating={product.rating} reviews={product.reviews} />
      </div>
    </div>
  );
};

