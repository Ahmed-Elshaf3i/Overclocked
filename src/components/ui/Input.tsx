import { FC, InputHTMLAttributes } from 'react';

// Input component props interface
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

// Reusable Input component
export const Input: FC<InputProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {/* Label (optional) */}
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
          {label}
        </label>
      )}
      
      {/* Input field */}
      <input
        className={`w-full px-4 py-3 border-2 ${
          error 
            ? 'border-red-500 dark:border-dark-accent-error focus:border-red-500 dark:focus:border-dark-accent-error focus:ring-red-100 dark:focus:ring-dark-accent-error/20' 
            : 'border-neutral-200 dark:border-dark-border-primary focus:border-accent dark:focus:border-dark-accent-primary focus:ring-accent/20 dark:focus:ring-dark-accent-primary/20 hover:border-neutral-300 dark:hover:border-dark-border-secondary'
        } rounded-lg bg-white dark:bg-dark-bg-secondary text-gray-900 dark:text-dark-text-primary focus:outline-none focus:ring-2 transition-all duration-300 placeholder:text-neutral-400 dark:placeholder:dark-text-muted ${className}`}
        {...props}
      />
      
      {/* Error message */}
      {error && (
        <p className="mt-1 text-sm text-red-500 dark:text-dark-accent-error">{error}</p>
      )}
    </div>
  );
};

