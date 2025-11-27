import { FC } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

// Props interface (optional - for customization)
interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

/**
 * ThemeToggle Component with Framer Motion
 * 
 * Beautifully animated button to toggle between light and dark themes.
 * Features smooth icon transitions, scale effects, and glowing hover states.
 * 
 * @example
 * // Basic usage
 * <ThemeToggle />
 * 
 * // With label
 * <ThemeToggle showLabel />
 * 
 * // Custom styling
 * <ThemeToggle className="ml-auto" />
 */
export const ThemeToggle: FC<ThemeToggleProps> = ({ 
  className = '', 
  showLabel = false 
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative flex items-center gap-2 p-2 rounded-lg
        bg-gradient-to-br from-gray-100 to-gray-200 
        dark:from-slate-800 dark:to-slate-900
        hover:shadow-lg dark:hover:shadow-indigo-500/20
        focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
        dark:focus:ring-offset-slate-900
        overflow-hidden
        ${className}
      `}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 to-orange-200/20 dark:from-indigo-500/10 dark:to-purple-500/10"
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Icon container with animation */}
      <div className="relative w-6 h-6 z-10">
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0, scale: 0 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0 }}
              transition={{ 
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="absolute inset-0"
            >
              <motion.div
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <SunIcon className="w-6 h-6 text-amber-500 dark:text-amber-400 drop-shadow-lg" />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, opacity: 0, scale: 0 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0 }}
              transition={{ 
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="absolute inset-0"
            >
              <MoonIcon className="w-6 h-6 text-indigo-600 drop-shadow-lg" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Optional label with animation */}
      {showLabel && (
        <AnimatePresence mode="wait">
          <motion.span
            key={theme}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="text-sm font-medium text-gray-700 dark:text-gray-300 z-10"
          >
            {isDark ? 'Dark' : 'Light'}
          </motion.span>
        </AnimatePresence>
      )}
    </motion.button>
  );
};

