import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useToast } from "@/contexts/ToastContext";
import { authAPI } from "@/api/apiClient";
import { LoginCredentials } from "@/types";

export const SignInPage: FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!credentials.email || !credentials.password) {
      showToast("Please fill in all fields", "error");
      return;
    }

    setIsSubmitting(true);
    try {
      await authAPI.login(credentials);
      showToast("Login successful!", "success");
      navigate("/");
    } catch (error: any) {
      showToast(error.response?.data?.message || "Login failed", "error");
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

          {/* Right Side - Login Form */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-text-primary mb-2">
                Log in to Exclusive
              </h1>
              <p className="text-gray-600 dark:text-dark-text-secondary">
                Enter your details below
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Email"
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

              <Input
                label="Password"
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />

              <div className="flex items-center justify-between gap-4">
                <Button
                  type="submit"
                  variant="primary"
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Log In"}
                </Button>
              </div>
            </form>

            <p className="text-center text-gray-600 dark:text-dark-text-secondary">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-accent hover:underline font-medium"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
