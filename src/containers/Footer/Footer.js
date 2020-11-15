import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";

const Footer = () => {
  return (
    <Box
      component={Grid}
      container
      display="flex"
      justify="space-between"
      alignItems="center"
      px={20}
      py={10}
    >
      <Grid item xs={4}>
        <Typography variant="h5">Branding stuff</Typography>
        <br />
        <Typography variant="body2" color="textSecondary" component="p">
          In fugiat pariatur consectetur fugiat ut laborum proident minim
          occaecat ad nostrud. Occaecat qui mollit in elit pariatur nostrud.
          Sint officia nostrud non reprehenderit amet et eu aliquip.
        </Typography>
      </Grid>
      <Grid item xs={4}>
        ів
      </Grid>
    </Box>
  );
};

export default Footer;
