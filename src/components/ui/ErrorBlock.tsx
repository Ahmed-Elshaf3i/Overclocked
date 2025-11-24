import { FC } from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

// ErrorBlock component props interface
interface ErrorBlockProps {
  title?: string;
  message: string;
  onRetry?: () => void;
}

// Reusable Error Block component
export const ErrorBlock: FC<ErrorBlockProps> = ({
  title = 'An error occurred',
  message,
  onRetry,
}) => {
  return (
    <div className="bg-red-50 dark:bg-dark-bg-secondary border border-red-200 dark:border-dark-accent-error/30 rounded-lg p-6 flex flex-col items-center text-center transition-colors duration-300">
      {/* Error Icon */}
      <ExclamationTriangleIcon className="w-12 h-12 text-red-500 dark:text-dark-accent-error mb-4" />
      
      {/* Error Title */}
      <h2 className="text-xl font-bold text-red-900 dark:text-dark-accent-error mb-2">{title}</h2>
      
      {/* Error Message */}
      <p className="text-red-700 dark:text-dark-text-secondary mb-4">{message}</p>
      
      {/* Retry Button (optional) */}
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-red-600 dark:bg-dark-accent-error text-white rounded hover:bg-red-700 dark:hover:bg-red-500 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

