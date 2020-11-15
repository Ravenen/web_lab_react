import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavLink, StyledUl, StyledBadge } from "./Navigation.styled";
import Badge from "@material-ui/core/Badge";
import { HoverableNavLink } from "../../../components/HoverableLink/HoverableLink.styled";

const Navigation = () => {
  return (
    <StyledUl>
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
    </StyledUl>
  );
};

export default Navigation;
