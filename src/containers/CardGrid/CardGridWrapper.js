import { Grid } from "@material-ui/core";
import React from "react";

const CardGridWrapper = ({ key, ...props }) => {
  return (
    <Grid item sm={12} md={6} lg={4} key={key}>
      {props.children}
    </Grid>
  );
};

export default CardGridWrapper;
