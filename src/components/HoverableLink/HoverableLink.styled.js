import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HoverableAnchorLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease-out 0s;
  :hover {
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

export const HoverableNavLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease-out 0s;
  :hover {
    color: ${(props) => props.theme.palette.primary.main};
  }
`;
