import { FC } from 'react';

// LoadingSpinner component props interface
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Reusable Loading Spinner component
export const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  size = 'md',
  className = '',
}) => {
  // Size classes for the spinner
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  };
  
  return (
    <div
      className={`${sizeClasses[size]} border-accent dark:border-dark-accent-primary border-t-transparent rounded-full animate-spin ${className}`}
      role="status"
      aria-label="Loading"
    />
  );
};

