import { FC } from 'react';
import { XMarkIcon, CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

interface ToastProps {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: (id: string) => void;
}

export const Toast: FC<ToastProps> = ({ id, message, type, onClose }) => {
  const icons = {
    success: <CheckCircleIcon className="w-5 h-5 text-green-500" />,
    error: <ExclamationCircleIcon className="w-5 h-5 text-red-500" />,
    info: <InformationCircleIcon className="w-5 h-5 text-blue-500" />,
  };

  const bgColors = {
    success: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    error: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
    info: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
  };

  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-lg border ${bgColors[type]} shadow-lg dark:shadow-glow-subtle animate-slide-in-right`}
    >
      {icons[type]}
      <p className="flex-1 text-sm font-medium text-gray-900 dark:text-dark-text-primary">{message}</p>
      <button
        onClick={() => onClose(id)}
        className="p-1 hover:bg-white/50 dark:hover:bg-black/20 rounded transition-colors"
        aria-label="Close notification"
      >
        <XMarkIcon className="w-4 h-4 text-gray-600 dark:text-dark-text-tertiary" />
      </button>
    </div>
  );
};

interface ToastContainerProps {
  toasts: Array<{ id: string; message: string; type: 'success' | 'error' | 'info' }>;
  onClose: (id: string) => void;
}

export const ToastContainer: FC<ToastContainerProps> = ({ toasts, onClose }) => {
  return (
    <div className="fixed top-20 right-4 z-50 flex flex-col gap-2 max-w-sm">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={onClose} />
      ))}
    </div>
  );
};

