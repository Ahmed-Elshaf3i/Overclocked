import { FC } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ToastContainer } from "../ui/Toast";
import { useToast } from "@/contexts/ToastContext";

export const RootLayout: FC = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-dark-bg-primary transition-colors duration-300">
      <Header />

      <main className="flex-1 bg-white dark:bg-dark-bg-primary">
        <Outlet />
      </main>

      <Footer />

      <ToastContainer toasts={toasts} onClose={removeToast} />

      <ScrollRestoration />
    </div>
  );
};
