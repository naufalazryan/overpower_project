/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        putih: "#fff",
        abuSidebar: "#f8f8f8",
        merah: "#AC2427",
        abuTua: "#59595c",
        abuMuda: "#808184",
      },
      spacing: {},
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        "8xs": "5px",
        "3xs": "10px",
      },
            backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
