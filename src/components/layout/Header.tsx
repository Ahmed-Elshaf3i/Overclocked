import { FC, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

// Header component - Global navigation
export const Header: FC = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/about' },
    { name: 'Sign Up', path: '/signup' },
  ];
  
  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };
  
  return (
    <header className="w-full">
      {/* Top Bar - Promotional Banner */}
      <div className="bg-black dark:bg-dark-bg-primary text-white py-3 transition-colors duration-300">
        <div className="container-custom">
          <div className="flex items-center justify-between text-sm">
            <div className="flex-1" />
            <p className="text-center">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
              <Link to="/" className="font-semibold underline ml-2 hover:text-gray-200 transition-colors">
                ShopNow
              </Link>
            </p>
            <div className="flex-1 flex justify-end">
              <select className="bg-transparent text-white border-none outline-none cursor-pointer">
                <option value="en" className="bg-black text-white">English</option>
                <option value="ar" className="bg-black text-white">Arabic</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="border-b border-neutral-200 dark:border-dark-border-primary bg-white dark:bg-dark-bg-secondary transition-colors duration-300 shadow-sm dark:shadow-card-dark">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-2xl font-bold text-black dark:text-dark-text-primary transition-all duration-300 hover:scale-105"
            >
              Exclusive
            </Link>
            
            {/* Desktop Navigation Links */}
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
            
            {/* Search & Icons */}
            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="hidden lg:flex items-center bg-neutral-100 dark:bg-dark-bg-tertiary rounded-lg px-3 py-2 transition-all duration-300 hover:ring-2 hover:ring-gray-300 dark:hover:ring-dark-accent-primary/30">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none text-sm w-64 text-gray-900 dark:text-dark-text-primary placeholder-gray-500 dark:placeholder-dark-text-muted transition-colors"
                />
                <button type="submit" aria-label="Search">
                  <MagnifyingGlassIcon className="w-5 h-5 text-gray-600 dark:text-dark-text-tertiary" />
                </button>
              </form>
              
              {/* Theme Toggle */}
              <ThemeToggle />
              
              {/* Wishlist Icon */}
              <Link
                to="/wishlist"
                className="relative p-2 hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary rounded-full transition-all duration-300 group"
                aria-label="Wishlist"
              >
                <HeartIcon className="w-6 h-6 text-gray-900 dark:text-dark-text-primary transition-transform group-hover:scale-110" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent dark:bg-dark-accent-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>
              
              {/* Cart Icon */}
              <Link
                to="/cart"
                className="relative p-2 hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary rounded-full transition-all duration-300 group"
                aria-label="Shopping Cart"
              >
                <ShoppingCartIcon className="w-6 h-6 text-gray-900 dark:text-dark-text-primary transition-transform group-hover:scale-110" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent dark:bg-dark-accent-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                    {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                )}
              </Link>
              
              {/* User Account Icon */}
              <Link
                to="/profile"
                className="hidden md:block p-2 hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary rounded-full transition-all duration-300 group"
                aria-label="My Account"
              >
                <UserIcon className="w-6 h-6 text-gray-900 dark:text-dark-text-primary transition-transform group-hover:scale-110" />
              </Link>
              
              {/* Mobile Menu Toggle */}
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
          
          {/* Mobile Navigation Menu */}
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

