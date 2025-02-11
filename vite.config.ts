import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  base: "/nvidia-ceo/",
  build: {
    outDir: "dist", // مشخص کردن مسیر خروجی
    assetsDir: "assets", // اطمینان از ذخیره درست CSS و JS
  },
});
