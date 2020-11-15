import React from "react";
import { StyledNav } from "./Layout.styled";
import Navigation from "../Navigation/Navigation";
import NavActionButtons from "../NavActionButtons/NavActionButtons";

const Layout = () => {
  return (
    <StyledNav>
      <img
        alt="logo"
        className="logo"
        src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo.png"
      />
      <Navigation />
      <NavActionButtons />
    </StyledNav>
  );
};

export default Layout;
