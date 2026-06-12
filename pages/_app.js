import "@/styles/globals.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0B63CE",
      dark: "#073A86",
    },
    secondary: {
      main: "#00A6A6",
    },
    background: {
      default: "#F6F8FB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#102033",
      secondary: "#526477",
    },
  },
  typography: {
    fontFamily:
      'Inter, "PingFang SC", "Microsoft YaHei", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: 0,
    },
    h2: {
      fontWeight: 760,
      letterSpacing: 0,
    },
    h3: {
      fontWeight: 720,
      letterSpacing: 0,
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
