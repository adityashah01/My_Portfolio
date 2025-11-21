/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enable dark mode using a class strategy
  darkMode: "class",
  
  // Paths to all of your template files
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      // Custom fonts
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
      },
      // Optional: add custom colors, spacing, or animations here
      colors: {
        primary: "#4f46e5", // Example custom color
        secondary: "#f43f5e",
      },
    },
  },
  

  plugins: [
    // Example plugins you might want to add
    require("@tailwindcss/forms"),   // For styled form elements
    require("@tailwindcss/typography"), // For prose styling
    require("@tailwindcss/aspect-ratio"), // For media aspect ratio
  ],
};
