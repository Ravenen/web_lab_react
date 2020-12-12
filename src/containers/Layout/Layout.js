import { Box, Hidden } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React from "react";
import { HoverableNavLink } from "../../components/HoverableLink/HoverableLink.styled";
import logo from "../../img/logo.png";
import NavActionButtons from "./NavActionButtons/NavActionButtons";
import Navigation from "./Navigation/Navigation";

const Layout = () => {
  return (
    <Box
      py={2}
      width="100%"
      position="fixed"
      zIndex={1000}
      bgcolor="#FFFFFF"
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <HoverableNavLink exact to="/">
        <img alt="logo" src={logo} />
      </HoverableNavLink>
      <Hidden smDown>
        <Navigation />
        <NavActionButtons />
      </Hidden>
      <Hidden mdUp>
        <Menu />
      </Hidden>
    </Box>
  );
};

export default Layout;
