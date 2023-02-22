/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#14B8A6',
        secondary: '#4DB6AC',
        accent: '#26A69A',
        neutral: '#00897B',
      },
      fontFamily: {
        // sans: ['Sofia Sans, sans-serif'],
        custom: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        // 'banner-image': "url('https://ibb.co/BqZ95b7')",
        'banner-image': "url('/images/dev.png')",
        // 'banner-image': "url('/assets/images/dev.png')",
        // 'appointment-image': "url('/src/assets/images/appointment.png')",
        // 'footer-image': "url('/src/assets/images/footer.png')",
      },
    },
  },
  plugins: [require('daisyui')],
};
