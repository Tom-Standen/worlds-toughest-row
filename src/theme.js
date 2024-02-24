// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003366'//'#3C649F', // Replace with your chosen color
    },
    // You can also customize other colors like secondary, error, warning, etc.
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ].join(','),
  },
});

export default theme;
