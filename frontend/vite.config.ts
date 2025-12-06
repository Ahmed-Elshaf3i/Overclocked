import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["@heroicons/react", "react-icons"],
          api: ["axios", "@tanstack/react-query"],
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 500,
    cssCodeSplit: true,
    sourcemap: false,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
  // Reduce optimization complexity
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
