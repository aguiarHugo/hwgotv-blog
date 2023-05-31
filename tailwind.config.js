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
            300: "#9146FF",
            400: "#34235c"
          },
          patchnotes: {
            100: "#F5C720"
          },
          builds: {
            100: "#8a0600"
          },
        },
        backgroundImage: (theme) => ({
          "gradient-gradual":
            "linear-gradient(180deg, rgba(116, 116, 116, 0) 66.15%, #000000 100%)",
        }),
      },
    },
  plugins: [],
}
