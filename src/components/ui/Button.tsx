import { FC, ButtonHTMLAttributes } from 'react';

// Button variant types
type ButtonVariant = 'primary' | 'secondary' | 'outline';

// Button component props interface
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  fullWidth?: boolean;
}

// Reusable Button component
export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  children,
  fullWidth = false,
  className = '',
  ...props
}) => {
  // Base classes for all buttons
  const baseClasses = 'px-8 py-3 rounded font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Variant-specific classes
  const variantClasses = {
    primary: 'bg-accent dark:bg-dark-accent-primary text-white hover:bg-accent-hover dark:hover:bg-dark-accent-secondary active:bg-accent-active shadow-md hover:shadow-lg dark:hover:shadow-glow-red',
    secondary: 'bg-black dark:bg-dark-bg-elevated text-white hover:bg-neutral-800 dark:hover:bg-dark-bg-tertiary shadow-md hover:shadow-lg',
    outline: 'border-2 border-neutral-300 dark:border-dark-border-primary text-gray-900 dark:text-dark-text-primary hover:border-black dark:hover:border-dark-accent-primary bg-transparent dark:hover:shadow-glow-red',
  };
  
  // Width class
  const widthClass = fullWidth ? 'w-full' : '';
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`.trim();
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

