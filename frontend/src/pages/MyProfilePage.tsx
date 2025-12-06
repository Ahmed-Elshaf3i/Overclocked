import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/contexts/ToastContext";
import { userAPI, authAPI } from "@/api/apiClient";
import { User } from "@/types";

export const MyProfilePage: FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await userAPI.getMyProfile();
        setUser(profileData);
      } catch (error: any) {
        showToast("Failed to load profile", "error");
        if (error.response?.status === 401) {
          navigate("/signin");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [navigate, showToast]);

  const handleLogout = () => {
    authAPI.logout();
    showToast("Logged out successfully", "success");
    navigate("/signin");
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="w-full min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Profile Not Found</h2>
          <Button variant="primary" onClick={() => navigate("/signin")}>
            Go to Sign In
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">My Account</h3>
              <nav className="space-y-2">
                <button className="w-full text-left px-4 py-2 text-accent font-medium rounded">
                  My Profile
                </button>
                <button
                  onClick={() => navigate("/profile/edit")}
                  className="w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 rounded"
                >
                  Edit Profile
                </button>
                <button
                  onClick={() => navigate("/orders")}
                  className="w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 rounded"
                >
                  My Orders
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-500 hover:text-red-700 rounded"
                >
                  Logout
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow p-8">
              <h2 className="text-2xl font-bold mb-8">My Profile</h2>

              {/* User Information */}
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <label className="text-gray-600 dark:text-dark-text-secondary text-sm">
                    Full Name
                  </label>
                  <p className="text-lg font-medium text-gray-900 dark:text-dark-text-primary">
                    {user.name}
                  </p>
                </div>

                <div className="border-b pb-4">
                  <label className="text-gray-600 dark:text-dark-text-secondary text-sm">
                    Email
                  </label>
                  <p className="text-lg font-medium text-gray-900 dark:text-dark-text-primary">
                    {user.email}
                  </p>
                </div>

                {user.address && (
                  <>
                    <div className="border-b pb-4">
                      <label className="text-gray-600 dark:text-dark-text-secondary text-sm">
                        Street Address
                      </label>
                      <p className="text-lg font-medium text-gray-900 dark:text-dark-text-primary">
                        {user.address.street || "Not provided"}
                      </p>
                    </div>

                    <div className="border-b pb-4">
                      <label className="text-gray-600 dark:text-dark-text-secondary text-sm">
                        City
                      </label>
                      <p className="text-lg font-medium text-gray-900 dark:text-dark-text-primary">
                        {user.address.city || "Not provided"}
                      </p>
                    </div>

                    <div className="border-b pb-4">
                      <label className="text-gray-600 dark:text-dark-text-secondary text-sm">
                        State
                      </label>
                      <p className="text-lg font-medium text-gray-900 dark:text-dark-text-primary">
                        {user.address.state || "Not provided"}
                      </p>
                    </div>

                    <div className="border-b pb-4">
                      <label className="text-gray-600 dark:text-dark-text-secondary text-sm">
                        Zip Code
                      </label>
                      <p className="text-lg font-medium text-gray-900 dark:text-dark-text-primary">
                        {user.address.zipCode || "Not provided"}
                      </p>
                    </div>

                    <div className="pb-4">
                      <label className="text-gray-600 dark:text-dark-text-secondary text-sm">
                        Country
                      </label>
                      <p className="text-lg font-medium text-gray-900 dark:text-dark-text-primary">
                        {user.address.country || "Not provided"}
                      </p>
                    </div>
                  </>
                )}

                <div className="mt-8">
                  <Button
                    variant="primary"
                    onClick={() => navigate("/profile/edit")}
                  >
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
