import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useToast } from "@/contexts/ToastContext";
import { userAPI } from "@/api/apiClient";
import { UpdateProfileData, Address } from "@/types";

export const EditProfilePage: FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState<UpdateProfileData>({
    name: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await userAPI.getMyProfile();
        setFormData({
          name: profileData.name,
          address: profileData.address || {
            street: "",
            city: "",
            state: "",
            zipCode: "",
            country: "",
          },
        });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    if (name.startsWith("address_")) {
      const addressField = name.replace("address_", "") as keyof Address;
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!formData.name?.trim()) {
      showToast("Name is required", "error");
      return;
    }

    setIsSaving(true);
    try {
      await userAPI.updateMyProfile(formData);
      showToast("Profile updated successfully!", "success");
      navigate("/profile");
    } catch (error: any) {
      showToast(
        error.response?.data?.message || "Failed to update profile",
        "error"
      );
    } finally {
      setIsSaving(false);
    }
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

  return (
    <div className="w-full py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">My Account</h3>
              <nav className="space-y-2">
                <button
                  onClick={() => navigate("/profile")}
                  className="w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 rounded"
                >
                  My Profile
                </button>
                <button className="w-full text-left px-4 py-2 text-accent font-medium rounded">
                  Edit Profile
                </button>
                <button
                  onClick={() => navigate("/orders")}
                  className="w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 rounded"
                >
                  My Orders
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow p-8">
              <h2 className="text-2xl font-bold mb-8">Edit Profile</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="border-b pb-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Personal Information
                  </h3>
                  <div className="space-y-4">
                    <Input
                      label="Full Name"
                      type="text"
                      name="name"
                      value={formData.name || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Address Information */}
                <div className="border-b pb-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Address Information
                  </h3>
                  <div className="space-y-4">
                    <Input
                      label="Street Address"
                      type="text"
                      name="address_street"
                      value={formData.address?.street || ""}
                      onChange={handleChange}
                    />

                    <Input
                      label="City"
                      type="text"
                      name="address_city"
                      value={formData.address?.city || ""}
                      onChange={handleChange}
                    />

                    <Input
                      label="State"
                      type="text"
                      name="address_state"
                      value={formData.address?.state || ""}
                      onChange={handleChange}
                    />

                    <Input
                      label="Zip Code"
                      type="text"
                      name="address_zipCode"
                      value={formData.address?.zipCode || ""}
                      onChange={handleChange}
                    />

                    <Input
                      label="Country"
                      type="text"
                      name="address_country"
                      value={formData.address?.country || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/profile")}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary" disabled={isSaving}>
                    {isSaving ? "Saving..." : "Save Changes"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
