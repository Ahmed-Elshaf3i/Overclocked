import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { STORAGE_KEYS } from '@/constants';

// Theme type definition
export type Theme = 'light' | 'dark';

// Context interface
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

// Create context with undefined default (will be provided by ThemeProvider)
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider props
interface ThemeProviderProps {
  children: ReactNode;
}

// ThemeProvider component - Manages theme state and applies to document
export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  // Initialize theme from localStorage or system preference
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) as Theme | null;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      return savedTheme;
    }

    // Fall back to system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  });

  // Apply theme to document root whenever it changes
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove both classes first
    root.classList.remove('light', 'dark');
    
    // Add current theme class
    root.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }, [theme]);

  // Toggle between light and dark
  const toggleTheme = (): void => {
    setThemeState((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Set specific theme
  const setTheme = (newTheme: Theme): void => {
    setThemeState(newTheme);
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

