import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useToast } from '@/contexts/ToastContext';

// ProfilePage component - Account dashboard with sidebar navigation
export const ProfilePage: FC = () => {
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initial profile data
  const initialData = {
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimel1111@gmail.com',
    address: 'Kingston, 5236, United State',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };
  
  // Profile form state
  const [profileData, setProfileData] = useState(initialData);
  
  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };
  
  // Validate password change
  const validatePasswordChange = (): boolean => {
    // If any password field is filled, all must be filled
    const hasPasswordChange = profileData.currentPassword || profileData.newPassword || profileData.confirmPassword;
    
    if (hasPasswordChange) {
      if (!profileData.currentPassword) {
        showToast('Please enter your current password', 'error');
        return false;
      }
      if (!profileData.newPassword) {
        showToast('Please enter a new password', 'error');
        return false;
      }
      if (profileData.newPassword.length < 8) {
        showToast('New password must be at least 8 characters', 'error');
        return false;
      }
      if (profileData.newPassword !== profileData.confirmPassword) {
        showToast('Passwords do not match', 'error');
        return false;
      }
    }
    return true;
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    if (!validatePasswordChange()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log('Profile updated:', profileData);
      showToast('Changes saved successfully!', 'success');
      
      // Clear password fields
      setProfileData((prev) => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      }));
    } catch (error) {
      showToast('Failed to save changes. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Handle cancel
  const handleCancel = (): void => {
    setProfileData(initialData);
    showToast('Changes cancelled', 'info');
  };
  
  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="container-custom py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-dark-text-tertiary">
          <a href="/" className="hover:text-black dark:hover:text-dark-text-primary transition-colors">Home</a>
          <span>/</span>
          <span className="text-black dark:text-dark-text-primary">My Account</span>
        </div>
      </div>
      
      {/* Account Section */}
      <section className="py-8 pb-16">
        <div className="container-custom">
          {/* Welcome Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <span className="text-gray-600 dark:text-dark-text-secondary">Welcome! </span>
              <span className="text-accent dark:text-dark-accent-primary font-medium">Md Rimel</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1">
              <nav className="space-y-6">
                {/* Manage My Account Section */}
                <div>
                  <h3 className="font-semibold mb-3 text-gray-900 dark:text-dark-text-primary">Manage My Account</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                          `block py-1 transition-colors ${
                            isActive ? 'text-accent dark:text-dark-accent-primary' : 'text-gray-600 dark:text-dark-text-tertiary hover:text-black dark:hover:text-dark-text-primary'
                          }`
                        }
                      >
                        My Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/profile/address"
                        className="block py-1 text-gray-600 dark:text-dark-text-tertiary hover:text-black dark:hover:text-dark-text-primary transition-colors"
                      >
                        Address Book
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/profile/payment"
                        className="block py-1 text-gray-600 dark:text-dark-text-tertiary hover:text-black dark:hover:text-dark-text-primary transition-colors"
                      >
                        My Payment Options
                      </NavLink>
                    </li>
                  </ul>
                </div>
                
                {/* My Orders Section */}
                <div>
                  <h3 className="font-semibold mb-3 text-gray-900 dark:text-dark-text-primary">My Orders</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <NavLink
                        to="/profile/returns"
                        className="block py-1 text-gray-600 dark:text-dark-text-tertiary hover:text-black dark:hover:text-dark-text-primary transition-colors"
                      >
                        My Returns
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/profile/cancellations"
                        className="block py-1 text-gray-600 dark:text-dark-text-tertiary hover:text-black dark:hover:text-dark-text-primary transition-colors"
                      >
                        My Cancellations
                      </NavLink>
                    </li>
                  </ul>
                </div>
                
                {/* My Wishlist Link */}
                <div>
                  <NavLink
                    to="/wishlist"
                    className="font-semibold text-gray-900 dark:text-dark-text-primary hover:text-accent dark:hover:text-dark-accent-primary transition-colors"
                  >
                    My Wishlist
                  </NavLink>
                </div>
              </nav>
            </aside>
            
            {/* Main Content - Edit Profile Form */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-dark-bg-secondary shadow-lg dark:shadow-card-dark rounded-lg p-8 border border-transparent dark:border-dark-border-primary transition-all duration-300">
                <h2 className="text-xl font-medium text-accent dark:text-dark-accent-primary mb-6">Edit Your Profile</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="First Name"
                      type="text"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      label="Last Name"
                      type="text"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  {/* Email and Address */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Email"
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      label="Address"
                      type="text"
                      name="address"
                      value={profileData.address}
                      onChange={handleChange}
                    />
                  </div>
                  
                  {/* Password Changes Section */}
                  <div className="pt-6">
                    <h3 className="font-medium mb-4 text-gray-900 dark:text-dark-text-primary">Password Changes</h3>
                    <div className="space-y-4">
                      <Input
                        type="password"
                        name="currentPassword"
                        placeholder="Current Password"
                        value={profileData.currentPassword}
                        onChange={handleChange}
                      />
                      <Input
                        type="password"
                        name="newPassword"
                        placeholder="New Password"
                        value={profileData.newPassword}
                        onChange={handleChange}
                      />
                      <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm New Password"
                        value={profileData.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex justify-end gap-4 pt-4">
                    <Button type="button" variant="outline" onClick={handleCancel} disabled={isSubmitting}>
                      Cancel
                    </Button>
                    <Button type="submit" variant="primary" disabled={isSubmitting}>
                      {isSubmitting ? 'Saving...' : 'Save Changes'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

