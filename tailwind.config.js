module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
},
  theme: {
    extend: {
      width: {
        '23': '23%',
        '45':'45%',
        '48':'48%'
      },
      margin:{
        'm2':'2.66%'
      }
    },
  },
  plugins: [],
}
