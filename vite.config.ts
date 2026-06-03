import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteTsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    viteTsconfigPaths(),
  ],
  build: {
    target: "es2020",
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("framer-motion")) return "framer-motion";
          if (id.includes("node_modules")) {
            if (id.includes("@tanstack/react-router") || id.includes("@tanstack/router-core")) {
              return "router";
            }
            if (id.includes("@tanstack/react-query")) return "query";
            if (id.includes("lucide-react")) return "icons";
            if (id.includes("zod")) return "zod";
          }
        },
      },
    },
  },
});
