import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

// SignInPage component - Login page with split layout
export const SignInPage: FC = () => {
  // Form state
  const [credentials, setCredentials] = useState({
    emailOrPhone: '',
    password: '',
  });
  
  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Login:', credentials);
    alert('Login successful!');
    // In real app: authenticate with API
  };
  
  return (
    <div className="w-full min-h-[80vh] flex items-center">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="hidden lg:block">
            <img
              src="https://via.placeholder.com/800x600?text=Shopping+Cart+and+Phone"
              alt="Shopping"
              className="w-full rounded-lg"
            />
          </div>
          
          {/* Right Side - Login Form */}
          <div className="max-w-md mx-auto w-full">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold mb-3">Log in to Exclusive</h1>
              <p className="text-gray-600">Enter your details below</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email or Phone Input */}
              <Input
                type="text"
                name="emailOrPhone"
                placeholder="Email or Phone Number"
                value={credentials.emailOrPhone}
                onChange={handleChange}
                required
              />
              
              {/* Password Input */}
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
              
              {/* Submit and Forgot Password */}
              <div className="flex items-center justify-between gap-4">
                <Button type="submit" variant="primary" className="flex-1">
                  Log In
                </Button>
                <Link to="/forgot-password" className="text-accent hover:underline">
                  Forget Password?
                </Link>
              </div>
            </form>
            
            {/* Sign Up Link */}
            <p className="text-center mt-8 text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-black underline hover:no-underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

