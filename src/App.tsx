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


// Create React Query client with default configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes - data stays fresh
      gcTime: 10 * 60 * 1000, // 10 minutes - garbage collection time (formerly cacheTime)
      retry: 3, // Retry failed requests 3 times
      refetchOnWindowFocus: false, // Disable auto-refetch on window focus
      refetchOnReconnect: true, // Refetch on network reconnect
    },
    mutations: {
      retry: 1, // Retry failed mutations once
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
  );
};

