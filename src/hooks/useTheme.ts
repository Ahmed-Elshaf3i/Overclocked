import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

/**
 * Custom hook to access theme context
 * 
 * @returns Theme context with current theme and toggle function
 * @throws Error if used outside of ThemeProvider
 * 
 * @example
 * const { theme, toggleTheme, setTheme } = useTheme();
 * 
 * // Toggle theme
 * <button onClick={toggleTheme}>Toggle Theme</button>
 * 
 * // Set specific theme
 * <button onClick={() => setTheme('dark')}>Dark Mode</button>
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

