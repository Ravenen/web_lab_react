import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Layout from "../Layout/Layout";
import { ThemeProvider } from "styled-components";
import PageContent from "../PageContent/PageContent";
import Footer from "../Footer/Footer";
import { ItemsContext } from "../../utils/Contexts";
import { API } from "../../utils/Utils";

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
  const items = API.getAll();
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <ItemsContext.Provider value={{ allItems: items }}>
            <Layout />
            <PageContent />
            <Footer />
          </ItemsContext.Provider>
        </ThemeProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default App;
