import { FC, ReactNode } from 'react';

interface AnimatedThemeWrapperProps {
  children: ReactNode;
}

/**
 * AnimatedThemeWrapper Component
 * 
 * Wraps content with smooth theme transition.
 * Creates a fade effect when switching between light and dark themes using CSS transitions.
 * 
 * @example
 * <AnimatedThemeWrapper>
 *   <YourPageContent />
 * </AnimatedThemeWrapper>
 */
export const AnimatedThemeWrapper: FC<AnimatedThemeWrapperProps> = ({ children }) => {
  return (
    <div className="w-full h-full transition-opacity duration-300">
      {children}
    </div>
  );
};

/**
 * PageTransition Component
 * 
 * Page transition with fade effect.
 * Use this for full page transitions.
 */
export const PageTransition: FC<AnimatedThemeWrapperProps> = ({ children }) => {
  return (
    <div className="animate-fade-in">
      {children}
    </div>
  );
};

/**
 * CardReveal Component
 * 
 * Animates cards/sections with CSS animations.
 */
interface CardRevealProps {
  children: ReactNode;
  delay?: number;
}

export const CardReveal: FC<CardRevealProps> = ({ children, delay = 0 }) => {
  return (
    <div 
      className="animate-slide-up hover:-translate-y-1 transition-transform duration-200"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/**
 * ThemeGlow Component
 * 
 * Adds a glow effect that changes with theme.
 * Perfect for hero sections or featured content.
 */
export const ThemeGlow: FC<AnimatedThemeWrapperProps> = ({ children }) => {
  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-30 bg-gradient-to-r from-accent via-red-400 to-rose-500 dark:from-dark-accent-primary dark:via-dark-accent-secondary dark:to-dark-accent-error animate-pulse" />
      
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
 * Creates a gentle floating animation using CSS.
 * Great for icons or decorative elements.
 */
export const FloatingElement: FC<AnimatedThemeWrapperProps> = ({ children }) => {
  return (
    <div className="animate-float">
      {children}
    </div>
  );
};

