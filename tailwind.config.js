/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode with class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Brand Colors from design system
      colors: {
        brand: {
          red: '#DB4444',
          black: '#000000',
          white: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#DB4444',
          hover: '#C13838',
          active: '#A92E2E',
        },
        success: {
          DEFAULT: '#00B517',
          light: '#E6F7E9',
        },
        // Enhanced Dark Theme Colors - Comfortable & Premium
        dark: {
          bg: {
            primary: '#1a1a1a',    // Comfortable dark gray - Main background
            secondary: '#242424',  // Elevated surface - Cards/panels
            tertiary: '#2e2e2e',   // Light surface - Hover states
            elevated: '#383838',   // Lightest surface - Active/selected
          },
          text: {
            primary: '#f5f5f5',    // Soft white - Main headings (gentle on eyes)
            secondary: '#e0e0e0',  // Light gray - Secondary text
            tertiary: '#b8b8b8',   // Medium gray - Muted text/labels
            muted: '#8a8a8a',      // Subdued gray - Disabled/placeholder
          },
          border: {
            primary: '#333333',    // Subtle border - Default borders
            secondary: '#4a4a4a',  // Visible border - Hover borders
            accent: '#DB4444',     // Brand red - Accent borders/focus states
          },
          accent: {
            primary: '#e74c4c',    // Bright brand red - Primary actions
            secondary: '#ff6b6b',  // Lighter red - Highlights/hover
            success: '#34d399',    // Softer green - Success states
            warning: '#fbbf24',    // Warm amber - Warning messages
            error: '#f87171',      // Soft red - Error states
          },
          glow: {
            red: 'rgba(231, 76, 76, 0.12)',        // Soft red glow
            redStrong: 'rgba(231, 76, 76, 0.2)',   // Moderate red glow
            success: 'rgba(52, 211, 153, 0.12)',   // Green glow for success
            subtle: 'rgba(255, 255, 255, 0.03)',   // Very subtle glow
          }
        },
      },
      
      // Typography
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      
      // Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      
      // Border Radius
      borderRadius: {
        'card': '0.25rem',
      },
      
      // Shadows
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'card-dark': '0 2px 8px rgba(0, 0, 0, 0.3)',
        'card-hover-dark': '0 4px 16px rgba(231, 76, 76, 0.1), 0 2px 8px rgba(0, 0, 0, 0.4)',
        'glow-red': '0 0 16px rgba(231, 76, 76, 0.25)',
        'glow-red-strong': '0 0 24px rgba(231, 76, 76, 0.35)',
        'glow-subtle': '0 1px 4px rgba(255, 255, 255, 0.03)',
        'glow-success': '0 0 16px rgba(52, 211, 153, 0.25)',
      },
      
      // Animations
      animation: {
        'countdown': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
    base: false,
  },
};

