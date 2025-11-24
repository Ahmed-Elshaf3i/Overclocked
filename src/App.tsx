import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { router } from './router';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import { ToastProvider } from './contexts/ToastContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: 3,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
    mutations: {
      retry: 1,
      onError: (error) => {
        console.error('Mutation error:', error);
      },
    },
  },
});

export const App: FC = () => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <CartProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </CartProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

