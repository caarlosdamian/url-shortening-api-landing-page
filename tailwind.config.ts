import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
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
        },
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
