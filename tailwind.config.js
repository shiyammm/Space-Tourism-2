/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00040f',
        secondary: '#00f6ff',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
      },
      fontFamily: {
        Barlow: ['Barlow', 'sans-serif'],
        'Barlow-Condensed': ['Barlow Condensed', 'sans-serif'],
        Bellefair: ['Bellefair', 'sans-serif'],
      },
      backgroundImage: {
        'home-patternDesktop': "url('/home/background-home-desktop.jpg')",
        'home-patternMobile': "url('/home/background-home-mobile.jpg')",
        'home-patternTablet': "url('/home/background-home-tablet.jpg')",
        'destination-patternDesktop':
          "url('/destination/background-destination-desktop.jpg')",
        'destination-patternMobile':
          "url('/destination/background-destination-mobile.jpg')",
        'destination-patternTablet':
          "url('/destination/background-destination-tablet.jpg')",
        'crew-patternDesktop': "url('/crew/background-crew-desktop.jpg')",
        'crew-patternMobile': "url('/crew/background-crew-mobile.jpg')",
        'crew-patternTablet': "url('/crew/background-crew-tablet.jpg')",
        'technology-patternDesktop':
          "url('/technology/background-technology-desktop.jpg')",
        'technology-patternMobile':
          "url('/technology/background-technology-mobile.jpg')",
        'technology-patternTablet':
          "url('/technology/background-technology-tablet.jpg')",
      },
      screens: {
        '2/5xl': '1870px',
      },
      center: {},
    },
  },
  plugins: [],
};
