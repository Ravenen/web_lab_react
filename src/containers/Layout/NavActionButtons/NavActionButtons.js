import React from "react";
import { Badge, Box, IconButton, makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RoundedButton from "../../../components/RoundedButton/RoundedButton";

const useStyles = makeStyles((theme) => ({
  extendedIcon: {
    marginRight: theme.spacing(5),
  },
}));

const ActionNavButtons = () => {
  const classes = useStyles();

  return (
    <Box display="flex">
      <IconButton aria-label="cart" className={classes.extendedIcon}>
        <Badge badgeContent={2} color="primary">
          <ShoppingCartIcon fontSize="small" />
        </Badge>
      </IconButton>
      <RoundedButton variant="contained" color="secondary">
        Sign In
      </RoundedButton>
    </Box>
  );
};

export default ActionNavButtons;
