// src/components/ui/ToastContainer.tsx
import { FC } from 'react';
import { XMarkIcon, CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { useToast } from '@/contexts/ToastContext';

export const ToastContainer: FC = () => {
  const { toasts, removeToast } = useToast();

  const getIcon = (type: 'success' | 'error' | 'info') => {
    switch (type) {
      case 'success':
        return <CheckCircleIcon className="w-6 h-6 text-green-500" />;
      case 'error':
        return <ExclamationCircleIcon className="w-6 h-6 text-red-500" />;
      case 'info':
        return <InformationCircleIcon className="w-6 h-6 text-blue-500" />;
    }
  };

  const getBgColor = (type: 'success' | 'error' | 'info') => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'error':
        return 'bg-red-50 border-red-200';
      case 'info':
        return 'bg-blue-50 border-blue-200';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center gap-3 p-4 rounded-lg border shadow-lg animate-slide-in ${getBgColor(toast.type)}`}
        >
          {getIcon(toast.type)}
          <p className="flex-1 text-sm font-medium text-gray-800">{toast.message}</p>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close notification"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
};

