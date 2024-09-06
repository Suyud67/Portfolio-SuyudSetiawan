import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // font roboto mono
        'rm-regular': 'RobotoMono-Regular, sans-serif',
        'rm-medium': 'RobotoMono-Medium, sans-serif',
        'rm-semibold': 'RobotoMono-SemiBold, sans-serif',
        'rm-bold': 'RobotoMono-Bold, sans-serif',

        // font handjet
        'handjet-light': 'Handjet-Light, sans-serif',
        'handjet-regular': 'Handjet-Regular, sans-serif',
        'handjet-medium': 'Handjet-Medium, sans-serif',
        'handjet-semibold': 'Handjet-SemiBold, sans-serif',
        'handjet-bold': 'Handjet-Bold, sans-serif',
        'handjet-extrabold': 'Handjet-ExtraBold, sans-serif',
        'handjet-black': 'Handjet-Black, sans-serif',
      },
      screens: {
        xs: '500px',
      },
      colors: {
        linkedinBlue: '#0A67C3',
        githubBlack: '#090908',
        mailRed: '#FF4737',
      },
    },
  },
  plugins: [],
};

export default config;
