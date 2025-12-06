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
    <div className="bg-red-50 border border-red-200 rounded-lg p-6 flex flex-col items-center text-center">
      {/* Error Icon */}
      <ExclamationTriangleIcon className="w-12 h-12 text-red-500 mb-4" />
      
      {/* Error Title */}
      <h2 className="text-xl font-bold text-red-900 mb-2">{title}</h2>
      
      {/* Error Message */}
      <p className="text-red-700 mb-4">{message}</p>
      
      {/* Retry Button (optional) */}
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

