import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { configDefaults } from "vitest/config";

export default defineConfig(({ mode }) => {
  // Charge les variables d'environnement du bon .env.<mode>
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: env.VITE_APP_BASE_URL || '/', 
    plugins: [react()],
    resolve: {
      extensions: [".js", ".ts", ".jsx", ".tsx"],
    },
    test: {
      environment: "jsdom",
      globals: true,
      setupFiles: "./src/setupTests.ts",
      exclude: [...configDefaults.exclude, "e2e/**"],
    },
  };
});
