import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export const SignInPage: FC = () => {
  const [credentials, setCredentials] = useState({
    emailOrPhone: '',
    password: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Login:', credentials);
    alert('Login successful!');
  };
  
  return (
    <div className="w-full min-h-[80vh] flex items-center">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hidden lg:block">
            <img
              src="https://via.placeholder.com/800x600?text=Shopping+Cart+and+Phone"
              alt="Shopping"
              className="w-full rounded-lg"
            />
          </div>
          
          <div className="max-w-md mx-auto w-full">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold mb-3 text-gray-900 dark:text-dark-text-primary">Log in to Exclusive</h1>
              <p className="text-gray-600 dark:text-dark-text-secondary">Enter your details below</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                name="emailOrPhone"
                placeholder="Email or Phone Number"
                value={credentials.emailOrPhone}
                onChange={handleChange}
                required
              />
              
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
              
              <div className="flex items-center justify-between gap-4">
                <Button type="submit" variant="primary" className="flex-1">
                  Log In
                </Button>
                <Link to="/forgot-password" className="text-accent dark:text-dark-accent-primary hover:underline transition-colors">
                  Forget Password?
                </Link>
              </div>
            </form>
            
            <p className="text-center mt-8 text-gray-600 dark:text-dark-text-secondary">
              Don't have an account?{' '}
              <Link to="/signup" className="text-black dark:text-dark-text-primary underline hover:no-underline transition-colors">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

