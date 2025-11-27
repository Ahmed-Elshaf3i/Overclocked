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
  const baseClasses = 'px-8 py-3 rounded font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Variant-specific classes
  const variantClasses = {
    primary: 'bg-accent text-white hover:bg-accent-hover active:bg-accent-active',
    secondary: 'bg-black text-white hover:bg-neutral-800',
    outline: 'border-2 border-neutral-300 hover:border-black bg-transparent',
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

