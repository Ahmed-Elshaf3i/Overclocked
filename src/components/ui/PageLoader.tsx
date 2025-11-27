import { FC } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface PageLoaderProps {
  message?: string;
}

/**
 * Full-page loading component with spinner and optional message
 */
export const PageLoader: FC<PageLoaderProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-dark-bg-primary">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mx-auto mb-4" />
        <p className="text-gray-600 dark:text-dark-text-tertiary text-lg">{message}</p>
      </div>
    </div>
  );
};

