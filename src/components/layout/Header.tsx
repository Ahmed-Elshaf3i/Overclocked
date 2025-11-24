import { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useCart } from '@/contexts/CartContext';

export const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { getCartCount } = useCart();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/about' },
    { name: 'Sign Up', path: '/signup' },
  ];
  
  return (
    <header className="w-full">
      <div className="bg-black dark:bg-dark-bg-primary text-white py-3 transition-colors duration-300">
        <div className="container-custom">
          <div className="flex items-center justify-center text-sm">
            <p className="text-center">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
              <Link to="/" className="font-semibold underline ml-2 hover:text-gray-200 transition-colors">
                ShopNow
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      <div className="border-b border-neutral-200 dark:border-dark-border-primary bg-white dark:bg-dark-bg-secondary transition-colors duration-300 shadow-sm dark:shadow-card-dark">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="text-2xl font-bold text-black dark:text-dark-text-primary transition-all duration-300 hover:scale-105"
            >
              Exclusive
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-all duration-300 ${
                      isActive
                        ? 'text-black dark:text-dark-text-primary border-b-2 border-black dark:border-dark-accent-primary font-medium'
                        : 'text-gray-600 dark:text-dark-text-tertiary hover:text-black dark:hover:text-dark-text-primary'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
            
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center bg-neutral-100 dark:bg-dark-bg-tertiary rounded-lg px-3 py-2 transition-all duration-300 hover:ring-2 hover:ring-gray-300 dark:hover:ring-dark-accent-primary/30">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="bg-transparent border-none outline-none text-sm w-64 text-gray-900 dark:text-dark-text-primary placeholder-gray-500 dark:placeholder-dark-text-muted transition-colors"
                />
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-600 dark:text-dark-text-tertiary" />
              </div>
              
              <ThemeToggle />
              
              <Link
                to="/cart"
                className="relative p-2 hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary rounded-full transition-all duration-300 group"
                aria-label="Shopping Cart"
              >
                <ShoppingCartIcon className="w-6 h-6 text-gray-900 dark:text-dark-text-primary transition-transform group-hover:scale-110" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent dark:bg-dark-accent-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                    {getCartCount()}
                  </span>
                )}
              </Link>
              
              <Link
                to="/profile"
                className="hidden md:block p-2 hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary rounded-full transition-all duration-300 group"
                aria-label="My Account"
              >
                <UserIcon className="w-6 h-6 text-gray-900 dark:text-dark-text-primary transition-transform group-hover:scale-110" />
              </Link>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary rounded-full transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6 text-gray-900 dark:text-dark-text-primary" />
                ) : (
                  <Bars3Icon className="w-6 h-6 text-gray-900 dark:text-dark-text-primary" />
                )}
              </button>
            </div>
          </div>
          
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-neutral-200 dark:border-dark-border-primary pt-4 bg-white/50 dark:bg-dark-bg-secondary/50 backdrop-blur-sm rounded-b-lg">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `py-2 px-3 rounded-lg transition-all duration-300 ${
                        isActive
                          ? 'text-accent dark:text-dark-accent-primary font-medium bg-accent/10 dark:bg-dark-accent-primary/10'
                          : 'text-gray-600 dark:text-dark-text-tertiary hover:text-black dark:hover:text-dark-text-primary hover:bg-gray-100 dark:hover:bg-dark-bg-tertiary'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

