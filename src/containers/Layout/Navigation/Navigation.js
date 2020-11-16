import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavLink, StyledNavMenu, StyledBadge } from "./Navigation.styled";
import Badge from "@material-ui/core/Badge";
import { HoverableNavLink } from "../../../components/HoverableLink/HoverableLink.styled";
import { Box } from "@material-ui/core";

const Navigation = () => {
  return (
    // <StyledNavMenu>
    <Box
      component={StyledNavMenu}
      p={0}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <li>
        <HoverableNavLink exact to="/" activeClassName="selected">
          Home
        </HoverableNavLink>
      </li>
      <li>
        <HoverableNavLink exact to="/catalog" activeClassName="selected">
          <StyledBadge badgeContent={"HOT"} color="primary">
            Catalog
          </StyledBadge>
        </HoverableNavLink>
      </li>
      <li>
        <HoverableNavLink exact to="/blog" activeClassName="selected">
          Blog
        </HoverableNavLink>
      </li>
    </Box>
    // </StyledNavMenu>
  );
};

export default Navigation;
