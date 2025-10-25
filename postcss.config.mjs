/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},  // ✅ correct Tailwind plugin for Next 16
    autoprefixer: {},            // ✅ adds cross-browser CSS prefixes
  },
};

export default config;
