/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      fontFamily: [{ "font-poppins": ["Poppins", "sans-serif"] }],
      backgroundImage: {
        "login-gradient": "linear-gradient(to bottom, #9a8478, #1e130c)"
      },
    },
  },
  plugins: [],
};
