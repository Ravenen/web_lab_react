import { Button } from "@material-ui/core";
import React from "react";
import { useStyles } from "./RoundedButton.styled";

const RoundedButton = (props) => {
  const classes = useStyles();
  return <Button {...props} className={classes.rounded}></Button>;
};

export default RoundedButton;
