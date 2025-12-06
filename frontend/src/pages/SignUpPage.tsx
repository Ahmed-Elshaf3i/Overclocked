import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useToast } from "@/contexts/ToastContext";
import { authAPI } from "@/api/apiClient";
import { RegisterCredentials } from "@/types";

export const SignUpPage: FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<RegisterCredentials>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      showToast("Name is required", "error");
      return false;
    }
    if (!formData.email.trim()) {
      showToast("Email is required", "error");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast("Please enter a valid email", "error");
      return false;
    }
    if (formData.password.length < 6) {
      showToast("Password must be at least 6 characters", "error");
      return false;
    }
    return true;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await authAPI.register(formData);
      showToast("Account created successfully!", "success");
      navigate("/");
    } catch (error: any) {
      showToast(
        error.response?.data?.message || "Registration failed",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-[80vh] flex items-center">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="hidden lg:block">
            <img
              src="https://img.freepik.com/premium-photo/shopping-cart-full-with-empty-items-laptop-computer-style-dark-gray-crimson_577115-48869.jpg"
              alt="Shopping"
              className="w-full rounded-lg object-cover"
            />
          </div>

          {/* Right Side - Form */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-text-primary mb-2">
                Create your account
              </h1>
              <p className="text-gray-600 dark:text-dark-text-secondary">
                Join us today and start shopping!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Full Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

              <Input
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="At least 6 characters"
                required
              />

              <Button
                type="submit"
                variant="primary"
                fullWidth
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating account..." : "Create Account"}
              </Button>
            </form>

            <p className="text-center text-gray-600 dark:text-dark-text-secondary">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-accent hover:underline font-medium"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
