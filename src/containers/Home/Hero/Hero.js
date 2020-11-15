import { Box, Grid, Hidden, Typography } from "@material-ui/core";
import React from "react";
import { StyledHero } from "./Hero.styled";
import hero from "../../../img/hero.png";
import RoundedButton from "../../../components/RoundedButton/RoundedButton";

const Hero = () => {
  return (
    <StyledHero>
      <Grid container justify="space-between">
        <Grid item md={6}>
          <Hidden smDown>
            <img alt="hero" src={hero} />
          </Hidden>
        </Grid>
        <Grid item sm={12} md={5}>
          <Box fontWeight={700} mb={2} mt={10}>
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
    </StyledHero>
  );
};

export default Hero;
