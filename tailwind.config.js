/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3D8BFD',           
        lightBlue: '#F1F6FC',         
        darkText: '#2E2E2E',           
        softText: '#A0AEC0',          
        cardBg: '#ffffff',             
        borderLight: '#E2E8F0',       
        greenHealth: '#38C172',       
        redHealth: '#E53E3E',          
        purpleCard: '#9F7AEA',         
        softBlueCard: '#CBD5F7',       
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        'card-padding': '1rem',
        'section-gap': '2rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.06)',
        inset: 'inset 0 1px 2px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
};
