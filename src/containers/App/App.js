import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalContextProvider } from "../../utils/Contexts";
import Footer from "../Footer/Footer";
import Layout from "../Layout/Layout";
import PageContent from "../PageContent/PageContent";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff003c",
    },
    secondary: {
      main: "#2577fd",
    },
    background: {
      main: "#C7ECFF",
    },
  },
  typography: {
    button: {
      fontSize: 15,
    },
    h1: {
      fontFamily: '"Playfair Display", serif',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <GlobalContextProvider>
            <Layout />
            <PageContent />
            <Footer />
          </GlobalContextProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default App;
