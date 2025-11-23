import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

// ProfilePage component - Account dashboard with sidebar navigation
export const ProfilePage: FC = () => {
  // Profile form state
  const [profileData, setProfileData] = useState({
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimel1111@gmail.com',
    address: 'Kingston, 5236, United State',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  
  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Profile updated:', profileData);
    alert('Changes saved successfully!');
    // In real app: send to API
  };
  
  // Handle cancel
  const handleCancel = (): void => {
    // Reset form or navigate away
    alert('Changes cancelled');
  };
  
  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="container-custom py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <a href="/" className="hover:text-black">Home</a>
          <span>/</span>
          <span className="text-black">My Account</span>
        </div>
      </div>
      
      {/* Account Section */}
      <section className="py-8 pb-16">
        <div className="container-custom">
          {/* Welcome Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <span className="text-gray-600">Welcome! </span>
              <span className="text-accent font-medium">Md Rimel</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1">
              <nav className="space-y-6">
                {/* Manage My Account Section */}
                <div>
                  <h3 className="font-semibold mb-3">Manage My Account</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                          `block py-1 transition-colors ${
                            isActive ? 'text-accent' : 'text-gray-600 hover:text-black'
                          }`
                        }
                      >
                        My Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/profile/address"
                        className="block py-1 text-gray-600 hover:text-black transition-colors"
                      >
                        Address Book
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/profile/payment"
                        className="block py-1 text-gray-600 hover:text-black transition-colors"
                      >
                        My Payment Options
                      </NavLink>
                    </li>
                  </ul>
                </div>
                
                {/* My Orders Section */}
                <div>
                  <h3 className="font-semibold mb-3">My Orders</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <NavLink
                        to="/profile/returns"
                        className="block py-1 text-gray-600 hover:text-black transition-colors"
                      >
                        My Returns
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/profile/cancellations"
                        className="block py-1 text-gray-600 hover:text-black transition-colors"
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
                    className="font-semibold hover:text-accent transition-colors"
                  >
                    My Wishlist
                  </NavLink>
                </div>
              </nav>
            </aside>
            
            {/* Main Content - Edit Profile Form */}
            <div className="lg:col-span-3">
              <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-xl font-medium text-accent mb-6">Edit Your Profile</h2>
                
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
                    <h3 className="font-medium mb-4">Password Changes</h3>
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
                    <Button type="button" variant="outline" onClick={handleCancel}>
                      Cancel
                    </Button>
                    <Button type="submit" variant="primary">
                      Save Changes
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

