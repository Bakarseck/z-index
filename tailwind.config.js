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
        "daaray-primary": "#E5E7EB", // replace with your color
        "daaray-secondary": "#1F2937", // replace with your color
        glass: "rgb(225, 225, 225, 0.2)",
        // Add other custom colors as needed
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "signupBtn": "url(../../public/assets/registerBtn.png)",
        "loginBtn": "url(/../../../assets/loginBtn.png)",
        "registerBtn": "url(/../../../assets/registerFormBtn.png)",
      },
    },
  },
  plugins: [],
};
