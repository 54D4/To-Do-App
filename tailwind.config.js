/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        buttonShadow: "0 0 8px 0px rgba(0,0,0,0.2) ",
      },
    },
  },
  plugins: [],
};
