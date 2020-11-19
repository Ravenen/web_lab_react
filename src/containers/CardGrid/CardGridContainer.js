import { Grid } from "@material-ui/core";
import React from "react";

const CardGridContainer = (props) => {
  return (
    <Grid container spacing={3}>
      {props.children}
    </Grid>
  );
};

export default CardGridContainer;
