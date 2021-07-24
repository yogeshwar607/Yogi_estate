module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37',
        secondary :'#2C2929',
        borderInput: '#555353',
        grayLight: '#E5E5E5',
        transparentBg: 'rgba(228, 228, 228, 0.3)',
        whitecolor: '#FFFFFF',
        fadeprimary: 'rgba(250, 249, 246, 0.29)',
        clientbg:'#E4E4E4'

      },
      fontFamily:{
        'montserrat' : 'Montserrat',
        'roboto': 'Roboto'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
