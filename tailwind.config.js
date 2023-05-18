/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
          dark: {
            100: "#d0d0d0",
            200: "#a0a0a1",
            300: "#121214",
            400: "#0e0e10",
          },
          purple: {
            100: "#9b79ea",
            200: "#8257e5",
            300: "#34235c",
          }
        },
    },
  },
  plugins: [],
}
