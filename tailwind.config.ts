const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      screens: {
        'mobile': {'min': '320px', 'max': '812px'},
        "tab": {'min':'768px', 'max':'1024px'},
        "ipad":{'min':'1024px', 'max': '1366px'},
        "lap":{'min':'1200px', 'max':'1600px'}
      },
      colors: {
        "matte-black": "#171717",
        "brand-gold": "#d1b069",
        "brand-gold-dark": "#b8985a",
        "brand-gold-light": "#e5c986"
      },
      animation: {},
      keyframes: {},
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

