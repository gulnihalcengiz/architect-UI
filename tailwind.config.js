/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'green-black' : '#3B5135',
        'orange-black': '#C48848',
        'gray-black' : '#898784',
        'lightyellow-brown' : '#e6e2d3',
        'secondary-white': '#c7c7c7',
        'secondary-gray' : '#3D3832'
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.1, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
};
