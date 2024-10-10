// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Scan for tailwind usage in all relevant files
  ],
  theme: {
    extend: {}, // Customize theme here if needed
  },
  plugins: [],
};

