import React from "react";
import { StyledNavMenu } from "./Navigation.styled";
import { HoverableNavLink } from "../../../components/HoverableLink/HoverableLink.styled";
import { Box } from "@material-ui/core";
import { StyledBadge } from "../../../components/StyledBadge/StyledBadge.styled";
import { links } from "../../../utils/Utils";

const Navigation = () => {
  return (
    <Box
      component={StyledNavMenu}
      p={0}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <li>
        <HoverableNavLink
          exact
          to={`/${links.home}`}
          activeClassName="selected"
        >
          Home
        </HoverableNavLink>
      </li>
      <li>
        <HoverableNavLink
          exact
          to={`/${links.catalog}`}
          activeClassName="selected"
        >
          <StyledBadge badgeContent={"HOT"} color="primary">
            Catalog
          </StyledBadge>
        </HoverableNavLink>
      </li>
      <li>
        <HoverableNavLink
          exact
          to={`/${links.blog}`}
          activeClassName="selected"
        >
          Blog
        </HoverableNavLink>
      </li>
    </Box>
  );
};

export default Navigation;
