import React from "react";
import { StyledNav } from "./Layout.styled";
import Navigation from "./Navigation/Navigation";
import NavActionButtons from "./NavActionButtons/NavActionButtons";
import logo from "../../img/logo.png";
import { Hidden } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const Layout = () => {
  return (
    <StyledNav>
      <img alt="logo" className="logo" src={logo} />
      <Hidden smDown>
        <Navigation />
        <NavActionButtons />
      </Hidden>
      <Hidden mdUp>
        <Menu />
      </Hidden>
    </StyledNav>
  );
};

export default Layout;
