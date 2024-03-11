import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import sassDts from "vite-plugin-sass-dts";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    sassDts({
      enabledMode: ["development", "production"],
      sourceDir: path.resolve(__dirname, "./src"),
    }),
    visualizer({
      filename: "stats.html",
      template: "sunburst",
      gzipSize: true,
    }),
    visualizer({
      filename: "stats.json",
      template: "raw-data",
      gzipSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
