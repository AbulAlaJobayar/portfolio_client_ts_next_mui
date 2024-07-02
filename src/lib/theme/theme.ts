'use client';
import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF6900", 
    },
    secondary: {
      main: "#FDF8F7",
    },
    background: {
      default: "#F9FAFB",  // Light Gray
    },
    text: {
      primary: "#15295F",  
      secondary: "#111111",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
       
      },
      styleOverrides: {
        root: {
          padding: "8px 24px",
          textTransform: 'none', // Disable uppercase transformation
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 5px 22px lightgray",  // Custom shadow
          borderRadius: "8px",  // Rounded corners
        },
      },
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 700,
    },
    body1: {
      color: "#111111",
    },
    button: {
      textTransform: 'none',  // Disable uppercase transformation
    },
  },
});
