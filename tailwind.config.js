/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yah: {
          950: "#06010C",
          900: "#09010E",
          800: "#12051D",
          700: "#1A0429",
        },
        teal: {
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#00E5E5",
          600: "#00BFBF",
        },
        purple: {
          300: "#C9A6FF",
          400: "#A78BFA",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow-teal": "0 0 24px rgba(0, 229, 229, 0.2), 0 0 60px rgba(0, 229, 229, 0.08)",
        "glow-teal-lg": "0 0 40px rgba(0, 229, 229, 0.35), 0 0 80px rgba(0, 229, 229, 0.12)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-lg": "0 8px 48px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
