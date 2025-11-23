import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

// NotFoundPage component - 404 error page
export const NotFoundPage: FC = () => {
  return (
    <div className="w-full min-h-[70vh] flex items-center">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-16">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <span className="text-black">404 Error</span>
        </div>
        
        {/* Error Content */}
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Large Text */}
          <h1 className="text-8xl md:text-9xl font-bold text-black mb-8">404 Not Found</h1>
          
          {/* Error Message */}
          <p className="text-lg text-gray-700 mb-12">
            Your visited page not found. You may go home page.
          </p>
          
          {/* Back to Home Button */}
          <Link to="/">
            <Button variant="primary">Back to home page</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

