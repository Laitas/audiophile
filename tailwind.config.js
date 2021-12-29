module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'headphonesL': "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.45),rgba(0,0,0,0.9)), url('./assets/home/desktop/image-hero.jpg')",
        'headphonesTab': "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.45),rgba(0,0,0,0.9)), url('./assets/home/tablet/image-header.jpg')",
        'headphonesM': "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.35),rgba(0,0,0,0.7)), url('./assets/home/mobile/image-header.jpg')",
      },
      height: {
        '600': '40rem',
      },
      colors : {
        'orange' : '#D87D4A',
        'light-orange' : '#fbaf85',
        'custom-gray' : '#f1f1f1',
        'custom-light-gray' : '#fafafa',
      }
    },
  },
  plugins: [],
}
