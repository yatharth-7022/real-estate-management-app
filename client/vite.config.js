import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Get the directory name using import.meta.url
const __dirname = new URL(".", import.meta.url).pathname;

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
