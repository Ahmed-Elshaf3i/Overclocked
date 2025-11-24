import { FC } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../../hooks/useTheme';

// Props interface (optional - for customization)
interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

/**
 * ThemeToggle Component
 * 
 * Button to toggle between light and dark themes.
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
    <button
      onClick={toggleTheme}
      className={`
        relative flex items-center gap-2 p-2 rounded-lg
        bg-gradient-to-br from-gray-100 to-gray-200 
        dark:from-slate-800 dark:to-slate-900
        hover:shadow-lg dark:hover:shadow-indigo-500/20
        hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
        dark:focus:ring-offset-slate-900
        overflow-hidden
        transition-all duration-200
        ${className}
      `}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Icon container */}
      <div className="relative w-6 h-6 z-10">
        {isDark ? (
          <SunIcon className="w-6 h-6 text-amber-500 dark:text-amber-400 drop-shadow-lg" />
        ) : (
          <MoonIcon className="w-6 h-6 text-indigo-600 drop-shadow-lg" />
        )}
      </div>

      {/* Optional label */}
      {showLabel && (
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 z-10">
          {isDark ? 'Dark' : 'Light'}
        </span>
      )}
    </button>
  );
};

