import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { templateCompilerOptions } from "@tresjs/core";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [vue({ ...templateCompilerOptions })],
  bulid: {
    minify: "terser", // <-- add
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
