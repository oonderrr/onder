/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
      },
      colors: {
        "fylo-dark-blue-email-background": "hsl(217, 28%, 15%)",
        "fylo-dark-blue-main-background": "hsl(218, 28%, 13%)",
        "fylo-dark-blue-footer-background": "hsl(216, 53%, 9%)",
        "fylo-dark-blue-testimonials background": "hsl(219, 30%, 18%)",
        "fylo-cyan-inside-call-to-action-gradient": "hsl(176, 68%, 64%)",
        "fylo-blue-inside-call-to-action-gradient": "hsl(198, 60%, 50%)",
        "fylo-light-red-error": "hsl(0, 100%, 63%)",
        "fylo-white": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
