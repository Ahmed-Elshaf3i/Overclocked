import { FC } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

// Rating component props interface
interface RatingProps {
  rating: number; // 0-5
  reviews?: number;
  showReviews?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

// Reusable Rating component with stars
export const Rating: FC<RatingProps> = ({
  rating,
  reviews,
  showReviews = true,
  size = 'md',
}) => {
  // Size classes for stars
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };
  
  // Generate array of 5 stars
  const stars = Array.from({ length: 5 }, (_, index) => {
    const filled = index < Math.floor(rating);
    return (
      <span key={index}>
        {filled ? (
          <StarIcon className={`${sizeClasses[size]} text-yellow-400 dark:text-yellow-500`} />
        ) : (
          <StarOutlineIcon className={`${sizeClasses[size]} text-gray-300 dark:text-dark-border-secondary`} />
        )}
      </span>
    );
  });
  
  return (
    <div className="flex items-center gap-2">
      {/* Star icons */}
      <div className="flex items-center gap-0.5">{stars}</div>
      
      {/* Review count (optional) */}
      {showReviews && reviews !== undefined && (
        <span className="text-sm text-gray-600 dark:text-dark-text-tertiary">({reviews})</span>
      )}
    </div>
  );
};

