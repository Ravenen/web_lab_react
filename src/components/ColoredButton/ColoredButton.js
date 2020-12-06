import {
  Button,
  createMuiTheme,
  MuiThemeProvider,
  useTheme,
} from "@material-ui/core";
import React from "react";

const ColoredButton = ({ color, ...props }) => {
  const oldTheme = useTheme();
  const newTheme = createMuiTheme({
    palette: {
      primary: {
        main: oldTheme.palette[color].main,
      },
    },
  });

  return (
    <MuiThemeProvider theme={newTheme}>
      <Button color="primary" {...props}>
        {props.children}
      </Button>
    </MuiThemeProvider>
  );
};

export default ColoredButton;
