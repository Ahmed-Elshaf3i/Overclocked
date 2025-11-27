import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useToast } from '@/contexts/ToastContext';

// SignUpPage component - Registration page with split layout
export const SignUpPage: FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form state
  const [credentials, setCredentials] = useState({
    name: '',
    emailOrPhone: '',
    password: '',
  });
  
  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };
  
  // Validate password
  const validatePassword = (password: string): boolean => {
    if (password.length < 8) {
      showToast('Password must be at least 8 characters long', 'error');
      return false;
    }
    return true;
  };
  
  // Validate email or phone
  const validateEmailOrPhone = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    
    if (!emailRegex.test(value) && !phoneRegex.test(value)) {
      showToast('Please enter a valid email or phone number', 'error');
      return false;
    }
    return true;
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    // Validation
    if (!credentials.name.trim()) {
      showToast('Please enter your name', 'error');
      return;
    }
    
    if (!validateEmailOrPhone(credentials.emailOrPhone)) {
      return;
    }
    
    if (!validatePassword(credentials.password)) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log('Sign up:', credentials);
      showToast('Account created successfully!', 'success');
      
      // Redirect to signin page
      setTimeout(() => {
        navigate('/signin');
      }, 1500);
    } catch (error) {
      showToast('Failed to create account. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Handle Google Sign Up
  const handleGoogleSignUp = (): void => {
    showToast('Google Sign Up - Coming Soon!', 'info');
    // In real app: integrate Google OAuth
  };
  
  return (
    <div className="w-full min-h-[80vh] flex items-center">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="hidden lg:block">
            <img
              src="https://img.freepik.com/premium-photo/shopping-cart-full-with-empty-items-laptop-computer-style-dark-gray-crimson_577115-48869.jpg"
              alt="Shopping cart with laptop - E-commerce"
              className="w-full rounded-lg object-cover"
            />
          </div>
          
          {/* Right Side - Sign Up Form */}
          <div className="max-w-md mx-auto w-full">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold mb-3">Create an account</h1>
              <p className="text-gray-600">Enter your details below</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={credentials.name}
                onChange={handleChange}
                required
              />
              
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
              
              {/* Submit Button */}
              <Button type="submit" variant="primary" fullWidth disabled={isSubmitting}>
                {isSubmitting ? 'Creating Account...' : 'Create Account'}
              </Button>
              
              {/* Google Sign Up Button */}
              <button
                type="button"
                onClick={handleGoogleSignUp}
                className="w-full flex items-center justify-center gap-3 px-8 py-3 border border-neutral-300 rounded hover:border-black transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Sign up with Google
              </button>
            </form>
            
            {/* Login Link */}
            <p className="text-center mt-8 text-gray-600">
              Already have account?{' '}
              <Link to="/signin" className="underline hover:no-underline ml-2">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

