/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#a60000ff",
          light: "#ff0000ff",
          dark: "#720000ff",
        },
        secondary: {
          DEFAULT: "#044374ff",
          light: "#0894ffff",
          dark: "#042a46ff",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
