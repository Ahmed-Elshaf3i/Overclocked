import { FC } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

// Root Layout component - Wraps all pages with Header and Footer
export const RootLayout: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-dark-bg-primary transition-colors duration-300">
      {/* Global Header */}
      <Header />
      
      {/* Main Content - Pages will render here */}
      <main className="flex-1 bg-white dark:bg-dark-bg-primary">
        <Outlet />
      </main>
      
      {/* Global Footer */}
      <Footer />
      
      {/* Scroll Restoration - Scroll to top on route change */}
      <ScrollRestoration />
    </div>
  );
};

