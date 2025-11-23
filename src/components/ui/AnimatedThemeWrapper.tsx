import { FC, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

interface AnimatedThemeWrapperProps {
  children: ReactNode;
}

/**
 * AnimatedThemeWrapper Component
 * 
 * Wraps content with smooth theme transition animations.
 * Creates a fade effect when switching between light and dark themes.
 * 
 * @example
 * <AnimatedThemeWrapper>
 *   <YourPageContent />
 * </AnimatedThemeWrapper>
 */
export const AnimatedThemeWrapper: FC<AnimatedThemeWrapperProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

/**
 * PageTransition Component
 * 
 * More elaborate page transition with slide effect.
 * Use this for full page animations with theme changes.
 */
export const PageTransition: FC<AnimatedThemeWrapperProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      key={theme}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * CardReveal Component
 * 
 * Animates cards/sections when theme changes.
 * Creates a staggered reveal effect.
 */
interface CardRevealProps {
  children: ReactNode;
  delay?: number;
}

export const CardReveal: FC<CardRevealProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
};

/**
 * ThemeGlow Component
 * 
 * Adds an animated glow effect that changes with theme.
 * Perfect for hero sections or featured content.
 */
export const ThemeGlow: FC<AnimatedThemeWrapperProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className="relative">
      {/* Animated glow effect */}
      <motion.div
        className={`
          absolute -inset-4 rounded-3xl blur-2xl opacity-30
          ${theme === 'dark' 
            ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' 
            : 'bg-gradient-to-r from-yellow-200 via-pink-200 to-blue-200'
          }
        `}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

/**
 * FloatingElement Component
 * 
 * Creates a gentle floating animation.
 * Great for icons or decorative elements.
 */
export const FloatingElement: FC<AnimatedThemeWrapperProps> = ({ children }) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

