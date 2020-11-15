import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";

export const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 0;

  li {
    padding: 0 15px;
    transition: all 0.3s ease-out 0s;
    :hover {
      color: ${(props) => props.theme.palette.primary.main};
    }

    .selected {
      color: ${(props) => props.theme.palette.primary.main};
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 5px 10px;
  text-decoration: none;
  color: inherit;
`;

export const StyledBadge = withStyles((theme) => ({
  badge: {
    fontSize: 10,
    right: -3,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);
