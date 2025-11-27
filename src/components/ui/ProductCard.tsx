import { FC } from 'react';
import { HeartIcon, EyeIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { Badge } from './Badge';
import { Rating } from './Rating';

// ProductCard component props interface
interface ProductCardProps {
  product: Product;
  onAddToWishlist?: (productId: string) => void;
  onQuickView?: (productId: string) => void;
  onAddToCart?: (productId: string) => void;
  isInWishlist?: boolean;
}

// Reusable Product Card component
export const ProductCard: FC<ProductCardProps> = ({
  product,
  onAddToWishlist,
  onQuickView,
  onAddToCart,
  isInWishlist = false,
}) => {
  // Calculate discount percentage
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;
  
  return (
    <div className="group relative bg-neutral-100 dark:bg-dark-bg-secondary rounded overflow-hidden border border-transparent dark:border-dark-border-primary transition-all duration-300 hover:shadow-lg dark:hover:border-dark-border-secondary dark:hover:shadow-glow-subtle">
      {/* Product Image Container */}
      <div className="relative aspect-square overflow-hidden">
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
          {/* Wishlist Button */}
          <button
            onClick={() => onAddToWishlist?.(product.id)}
            className="w-8 h-8 bg-white dark:bg-dark-bg-elevated rounded-full flex items-center justify-center text-gray-700 dark:text-dark-text-primary hover:bg-accent dark:hover:bg-dark-accent-primary hover:text-white transition-all duration-300 shadow-md dark:shadow-glow-subtle hover:shadow-lg dark:hover:shadow-glow-red"
            aria-label="Add to wishlist"
          >
            {isInWishlist ? (
              <HeartSolidIcon className="w-5 h-5 text-accent dark:text-dark-accent-primary" />
            ) : (
              <HeartIcon className="w-5 h-5" />
            )}
          </button>
          
          {/* Quick View Button */}
          <button
            onClick={() => onQuickView?.(product.id)}
            className="w-8 h-8 bg-white dark:bg-dark-bg-elevated rounded-full flex items-center justify-center text-gray-700 dark:text-dark-text-primary hover:bg-accent dark:hover:bg-dark-accent-primary hover:text-white transition-all duration-300 shadow-md dark:shadow-glow-subtle hover:shadow-lg dark:hover:shadow-glow-red"
            aria-label="Quick view"
          >
            <EyeIcon className="w-5 h-5" />
          </button>
        </div>
        
        {/* Add to Cart Button - Appears on Hover */}
        <button
          onClick={() => onAddToCart?.(product.id)}
          className="absolute bottom-0 left-0 right-0 bg-black dark:bg-dark-bg-elevated text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-neutral-800 dark:hover:bg-dark-accent-primary"
        >
          <span className="font-medium">Add To Cart</span>
        </button>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        {/* Product Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-black dark:text-dark-text-primary mb-2 hover:text-accent dark:hover:text-dark-accent-secondary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        {/* Price */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-accent dark:text-dark-accent-primary font-semibold">${product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-500 dark:text-dark-text-muted line-through text-sm">
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

