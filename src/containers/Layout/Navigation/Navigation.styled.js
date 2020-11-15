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
    padding: 5px 25px;

    .selected {
      color: ${(props) => props.theme.palette.primary.main};
    }
  }
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
