import { createTheme } from '@mui/material/styles';

// Import SCSS variables (we'll need to convert them to JS)
const colors = {
  white: '#ffffff',
  black: '#000000',
  primary: '#007bff',
  secondary: '#6c757d',
  background: '#d3d3d3',
  default: '#333',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      light: '#4dabf7',
      dark: '#0056b3',
      contrastText: colors.white,
    },
    secondary: {
      main: colors.secondary,
      light: '#8a9199',
      dark: '#495057',
      contrastText: colors.white,
    },
    background: {
      default: colors.background,
      paper: colors.white,
    },
    text: {
      primary: colors.default,
      secondary: colors.secondary,
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 16,
  },
  spacing: 8, // Base spacing unit
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Disable uppercase transformation
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});
