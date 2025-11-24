import { FC } from 'react';

// Badge variant types
type BadgeVariant = 'discount' | 'new';

// Badge component props interface
interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

// Reusable Badge component for product labels
export const Badge: FC<BadgeProps> = ({ variant, children, className = '' }) => {
  // Variant-specific classes
  const variantClasses = {
    discount: 'bg-accent dark:bg-dark-accent-primary text-white shadow-md dark:shadow-glow-red',
    new: 'bg-success dark:bg-dark-accent-success text-white shadow-md dark:shadow-glow-success',
  };
  
  return (
    <span
      className={`inline-block text-xs font-semibold px-3 py-1 rounded transition-all duration-300 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

