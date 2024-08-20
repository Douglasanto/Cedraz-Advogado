import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      backgroundImage: {
      'img_bg_hero': "url('../assets/capa2.jpg')",
      'img_bg_hero_orange': "url('../assets/ImgHomeOrange.webp')"
      },
    extend: {
      colors: {
        'primary': '#a78a4e',
        'second': '#1A1A1A',
        'Carosel': '#1b1b1b',
      }
    },
           animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
         scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
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
export default config;
