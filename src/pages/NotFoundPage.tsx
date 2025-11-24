import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export const NotFoundPage: FC = () => {
  return (
    <div className="w-full min-h-[70vh] flex items-center">
      <div className="container-custom">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-16">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <span className="text-black">404 Error</span>
        </div>
        
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-8xl md:text-9xl font-bold text-black mb-8">404 Not Found</h1>
          
          <p className="text-lg text-gray-700 mb-12">
            Your visited page not found. You may go home page.
          </p>
          
          <Link to="/">
            <Button variant="primary">Back to home page</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

