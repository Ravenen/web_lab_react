import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { Facebook, Twitter, LinkedIn } from "@material-ui/icons";
import IconWrapper from "../../components/IconWrapper/IconWrapper";

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
      <Box
        component={Grid}
        item
        xs={4}
        display="flex"
        justifyContent="flex-end"
      >
        <IconWrapper href="https://www.facebook.com/vpavliyk/">
          <Facebook />
        </IconWrapper>
        <IconWrapper href="https://twitter.com/Engenius7">
          <Twitter />
        </IconWrapper>
        <IconWrapper href="https://www.linkedin.com/in/vpavliyk/">
          <LinkedIn />
        </IconWrapper>
      </Box>
    </Box>
  );
};

export default Footer;
