import { Box, Grid, Hidden, Typography } from "@material-ui/core";
import React from "react";
import RoundedButton from "../../../components/RoundedButton/RoundedButton";
import hero from "../../../img/hero.png";

const Hero = () => {
  return (
    <Box display="flex" bgcolor="background.main" pt={15}>
      <Grid container justify="space-between" wrap="wrap">
        <Grid item md={6}>
          <Hidden smDown>
            <Box
              component="img"
              alt="hero"
              src={hero}
              height="100%"
              width="100%"
            />
          </Hidden>
        </Grid>
        <Grid item sm={10} md={5}>
          <Box fontWeight="bold" mb={2} mt={10}>
            <Typography variant="h1">Garland collection!</Typography>
          </Box>
          <Box fontStyle="italic" mb={6}>
            <Typography variant="h4" component="h2">
              Best garland collection of 2020!
            </Typography>
          </Box>
          <RoundedButton variant="contained" color="secondary">
            Shop now
          </RoundedButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
