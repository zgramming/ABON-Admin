/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        "hind-vadodara": ["Hind Vadodara", "sans-serif"],
      },
      colors: {
        primary: "#63A46C",
        accent: "#7994DA",
        success: "#00D8AC",
        info: "#5CB8E4",
        warning: "#ffb200",
        error: "#FF4A4A",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
