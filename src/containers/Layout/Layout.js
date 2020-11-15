import React from "react";
import { StyledNav } from "./Layout.styled";
import "./Layout.css";

const Layout = () => {
  return (
    <StyledNav>
      <img
        alt="logo"
        className="logo"
        src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo.png"
      />
    </StyledNav>
  );
};

export default Layout;
