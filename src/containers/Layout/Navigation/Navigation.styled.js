import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";

export const StyledNavMenu = styled.ul`
  list-style-type: none;

  li {
    padding: 0 25px;

    .selected {
      color: ${(props) => props.theme.palette.primary.main};
    }
  }
`;

export const StyledBadge = withStyles((theme) => ({
  badge: {
    fontSize: 10,
    right: -3,
    top: -1,
    border: `3px solid ${theme.palette.background.paper}`,
    padding: "0 5px",
  },
}))(Badge);
