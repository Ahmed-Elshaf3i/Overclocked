import axios from "axios";
import {
  User,
  LoginCredentials,
  RegisterCredentials,
  UpdateProfileData,
} from "@/types";

// =============================
// AXIOS INSTANCE SETUP
// =============================
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT token from localStorage to all requests
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle errors globally
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Only redirect if not already on signin page and token exists
      const token = localStorage.getItem("authToken");
      if (token && !window.location.pathname.includes("/signin")) {
        localStorage.removeItem("authToken");
        window.location.href = "/signin";
      }
    }
    return Promise.reject(error);
  }
);

// =============================
// AUTH ENDPOINTS
// =============================
export const authAPI = {
  register: async (
    credentials: RegisterCredentials
  ): Promise<{ token: string; user: User }> => {
    const { data } = await apiClient.post("/auth/register", credentials);
    if (data.token) {
      localStorage.setItem("authToken", data.token);
    }
    return { token: data.token, user: data };
  },

  login: async (
    credentials: LoginCredentials
  ): Promise<{ token: string; user: User }> => {
    const { data } = await apiClient.post("/auth/login", credentials);
    if (data.token) {
      localStorage.setItem("authToken", data.token);
    }
    return { token: data.token, user: data };
  },

  logout: (): void => {
    localStorage.removeItem("authToken");
  },
};

// =============================
// USER PROFILE ENDPOINTS
// =============================
export const userAPI = {
  getMyProfile: async (): Promise<User> => {
    const { data } = await apiClient.get("/users/profile");
    // backend returns { success, user, orders, totalOrders }
    return data.user;
  },

  updateMyProfile: async (updates: UpdateProfileData): Promise<User> => {
    const { data } = await apiClient.put("/users/profile", updates);
    // backend returns { success, message, user }
    return data.user;
  },
};

// =============================
// ORDER ENDPOINTS
// =============================
export const orderAPI = {
  createOrder: async (orderData: any): Promise<any> => {
    const { data } = await apiClient.post("/orders", orderData);
    return data;
  },

  getMyOrders: async (): Promise<any[]> => {
    const { data } = await apiClient.get("/orders/myorders");
    return data;
  },
};

export default apiClient;
