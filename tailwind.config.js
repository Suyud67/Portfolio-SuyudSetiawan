/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'rm-regular': 'RobotoMono-Regular, sans-serif',
        'rm-medium': 'RobotoMono-Medium, sans-serif',
        'rm-semibold': 'RobotoMono-SemiBold, sans-serif',
        'rm-bold': 'RobotoMono-Bold, sans-serif',
      },
    },
  },
  plugins: [],
};
