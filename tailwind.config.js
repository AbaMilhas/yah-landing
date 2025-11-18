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
        yah: { 900: "#230F31" },
        teal: { 500: "#13C4B7" },
        ink: "#F7F5F7",
        "ink-muted": "#CFC7D6",
      },
    },
  },
  plugins: [],
};
