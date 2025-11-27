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
    discount: 'bg-accent text-white',
    new: 'bg-success text-white',
  };
  
  return (
    <span
      className={`inline-block text-xs font-semibold px-3 py-1 rounded ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

