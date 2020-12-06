import { Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ColoredButton from "../ColoredButton/ColoredButton";

export const useStyles = makeStyles((theme) => ({
  rounded: {
    height: 45,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 30,
  },
}));

const RoundedButton = (props) => {
  const classes = useStyles();
  return <ColoredButton {...props} className={classes.rounded}></ColoredButton>;
};

export default RoundedButton;
