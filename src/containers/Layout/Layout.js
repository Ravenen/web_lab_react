import React from "react";
import Navigation from "./Navigation/Navigation";
import NavActionButtons from "./NavActionButtons/NavActionButtons";
import logo from "../../img/logo.png";
import { Box, Hidden } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { HoverableNavLink } from "../../components/HoverableLink/HoverableLink.styled";

const Layout = () => {
  return (
    <Box
      py={2}
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <HoverableNavLink exact to="/">
        <img alt="logo" className="logo" src={logo} />
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
