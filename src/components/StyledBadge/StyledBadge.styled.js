import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";

export const StyledBadge = withStyles((theme) => ({
  badge: {
    fontSize: 10,
    right: -3,
    top: -1,
    border: `3px solid ${theme.palette.background.paper}`,
    padding: "0 5px",
  },
}))(Badge);
