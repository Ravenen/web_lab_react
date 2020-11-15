import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavLink, StyledUl, StyledBadge } from "./Navigation.styled";
import Badge from "@material-ui/core/Badge";

const Navigation = () => {
  return (
    <StyledUl>
      <li>
        <StyledNavLink exact to="/" activeClassName="selected">
          Home
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink exact to="/catalog" activeClassName="selected">
          <StyledBadge badgeContent={"HOT"} color="primary">
            Catalog
          </StyledBadge>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink exact to="/blog" activeClassName="selected">
          Blog
        </StyledNavLink>
      </li>
    </StyledUl>
  );
};

export default Navigation;
