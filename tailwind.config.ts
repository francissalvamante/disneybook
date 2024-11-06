import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lato-sans": ["var(--font-lato-sans)"]
      },
      colors: {
        "custom-white": {
          100: '#F1F2F3'
        },
        'disney-blue': '#054553',
        "custom-gray": {
          100: '#C2CCDA',
          300: '#5B6873'
        },
        'error': '#FF0004'
      },
      boxShadow: {
        'button': '0 4px 4px 0 #054553',
        'image': '0 4px 24px 0 #054553',
      }
    },
  },
  plugins: [],
};
export default config;
