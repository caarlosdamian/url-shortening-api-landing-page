import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/images/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          onyx: '#34313D',
          jacarta: '#3A3054',
          manate: '#9E9AA8',
          flashWhite: '#EFF1F7',
          blueGreen: '#2BD0D0',
          blueGreenLight: '#9AE3E3',
        },
      },
      borderRadius:{
        smXl: '5px'
      },
      gridTemplateColumns: {
        desktop: 'minmax(15px, 165px) 1fr minmax(15px, 165px)',
        mobile: 'minmax(15px, 24px) 1fr minmax(15px, 24px)',
      },
      backgroundImage: {
        card: "url('/images/bg-boost-mobile.svg')",
        cardDesktop: "url('/images/bg-shorten-desktop.svg')",
        cardMobile: "url('/images/bg-shorten-mobile.svg')",
        boostDesktop: "url('/images/bg-boost-desktop.svg')",
        boostMobile: "url('/images/bg-boost-mobile.svg')"
      },
    },
  },
  plugins: [],
};
export default config;
