// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiBase: "http://localhost:3000/api",
    },
  },

  vue: {
    compilerOptions: {
      whitespace: "preserve",
    },
  },

  // ✅ Global CSS
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()] as any,
    build: {
      minify: "esbuild",
      cssMinify: true,
      // No custom manualChunks — they caused "Cannot access 'ut' / 'J' before initialization" in static build
    },
  },
  // For static: run "npm run generate" then "npx serve .output/public" from project root (or "serve ." from inside .output/public)
  app: {
    baseURL: "/",
    head: {
      title: "Qouanm",
      meta: [
        { name: "apple-mobile-web-app-title", content: "Qouanm" },
        {
          name: "description",
          content:
            "Qouanm is a platform for Design, Manufacture, and Deliver Premium Interiors",
        },
      ],
      htmlAttrs: {
        lang: "en", // or 'ar', 'fr', etc.
      },
      link: [
        // 🔹 Favicon and icons
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        // Preload only critical font to reduce main-thread work; others load normally
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "/fonts/Montserrat-Bold.woff2",
          crossorigin: "",
        },
      ],
    },
  },

  image: {
    format: ["webp"],
    quality: 80,
  },

  modules: [
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxt/icon",
    "motion-v/nuxt",
    "nuxt-swiper",
    // nuxt-vitalizer with disableStylesheets breaks static (generate): no CSS, icons, motion, swiper. Omit or use without that option.
    // "nuxt-vitalizer",
  ],
});
