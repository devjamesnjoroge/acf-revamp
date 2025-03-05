module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // App Router files
    "./src/components/**/*.{js,ts,jsx,tsx}", // Component folder files
    "./pages/**/*.{js,ts,jsx,tsx}", // Pages folder (if you're using it)
    "./public/**/*.{html,js}", // Public folder for static HTML files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#013b13",
        secondary: "#ff5d00",
        tertiary: "#ffba6f",
        accent: "#a6b385",
        background: "#f5f5e9",
        text: "#000000",
      },
    },
  },
  plugins: [],
};
