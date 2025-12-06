import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { router } from './router';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { ToastProvider } from './contexts/ToastContext';
import { ToastContainer } from './components/ui/ToastContainer';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { QUERY_CONFIG } from './constants';


// Create React Query client with default configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: QUERY_CONFIG.STALE_TIME, // 5 minutes - data stays fresh
      gcTime: QUERY_CONFIG.GC_TIME, // 10 minutes - garbage collection time (formerly cacheTime)
      retry: QUERY_CONFIG.RETRY_COUNT, // Retry failed requests 3 times
      refetchOnWindowFocus: false, // Disable auto-refetch on window focus
      refetchOnReconnect: true, // Refetch on network reconnect
    },
    mutations: {
      retry: QUERY_CONFIG.MUTATION_RETRY_COUNT, // Retry failed mutations once
      onError: (error) => {
        // Global error handling for mutations
        console.error('Mutation error:', error);
      },
    },
  },
});

// Main App component - Root of the application
export const App: FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <ToastProvider>
            <WishlistProvider>
              <CartProvider>
                {/* Router Provider with all routes */}
                <RouterProvider router={router} />
                
                {/* Toast Notification Container */}
                <ToastContainer />
              </CartProvider>
            </WishlistProvider>
          </ToastProvider>

          {/* React Query DevTools - only in development */}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

