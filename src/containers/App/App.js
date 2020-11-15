import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Layout from "../Layout/Layout";
import { ThemeProvider } from "styled-components";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff003c",
    },
    secondary: {
      main: "#2577fd",
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Layout />
        </ThemeProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default App;
