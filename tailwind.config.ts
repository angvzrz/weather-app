import withMT from '@material-tailwind/react/utils/withMT';

module.exports = withMT({
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wr: {
          'steel-blue': '#5E88BF',
          'oxford-blue': '#14548C',
          'pale-cornflower': '#A3BFD9',
          'pale-blue': '#DFE9F2',
          pink: '#F0587C',
        },
      },
    },
  },
  plugins: [],
});
