/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: "istanbul", // or 'v8'
      reporter: ["text", "json", "html"],
    },
    // 👋 add the line below to add jsdom to vite
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.js", // assuming the test folder is in the root of our project
  },
});
