import { FC, ReactNode } from 'react';

interface AnimatedThemeWrapperProps {
  children: ReactNode;
}

/**
 * AnimatedThemeWrapper Component
 * 
 * Simple wrapper for theme content.
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
 * Simple wrapper for page content.
 */
export const PageTransition: FC<AnimatedThemeWrapperProps> = ({ children }) => {
  return (
    <div className="transition-all duration-300">
      {children}
    </div>
  );
};

/**
 * CardReveal Component
 * 
 * Wrapper for cards/sections.
 */
interface CardRevealProps {
  children: ReactNode;
  delay?: number;
}

export const CardReveal: FC<CardRevealProps> = ({ children }) => {
  return (
    <div className="transition-all duration-300 hover:-translate-y-1">
      {children}
    </div>
  );
};

/**
 * ThemeGlow Component
 * 
 * Wrapper with glow effect that changes with theme.
 */
export const ThemeGlow: FC<AnimatedThemeWrapperProps> = ({ children }) => {
  return (
    <div className="relative">
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
 * Simple wrapper for decorative elements.
 */
export const FloatingElement: FC<AnimatedThemeWrapperProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

