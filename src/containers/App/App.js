import { Button } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { SnackbarProvider } from "notistack";
import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalContextProvider } from "../../utils/Contexts";
import { links } from "../../utils/Utils";
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
            <SnackbarProvider
              maxSnack={3}
              action={
                <NavLink exact to={`/${links.cart}`}>
                  <Button>Go to cart</Button>
                </NavLink>
              }
            >
              <Layout />
              <PageContent />
              <Footer />
            </SnackbarProvider>
          </GlobalContextProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default App;
