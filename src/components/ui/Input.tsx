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
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      
      {/* Input field */}
      <input
        className={`w-full px-4 py-3 border-2 ${
          error ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-neutral-200 focus:border-blue-500 focus:ring-blue-100 hover:border-neutral-300'
        } rounded-lg bg-white focus:outline-none focus:ring-2 transition-all duration-200 placeholder:text-neutral-400 ${className}`}
        {...props}
      />
      
      {/* Error message */}
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

