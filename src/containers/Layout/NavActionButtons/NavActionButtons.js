import { Badge, Box, IconButton, makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import { useSelector } from "react-redux";
import { HoverableNavLink } from "../../../components/HoverableLink/HoverableLink.styled";
import RoundedButton from "../../../components/RoundedButton/RoundedButton";
import { selectCart } from "../../../utils/context/slice/cartSlice";
import { links } from "../../../utils/Utils";

const useStyles = makeStyles((theme) => ({
  extendedIcon: {
    marginRight: theme.spacing(5),
  },
}));

const ActionNavButtons = () => {
  const classes = useStyles();
  const cart = useSelector(selectCart);

  return (
    <Box display="flex">
      <HoverableNavLink exact to={`/${links.cart}`} activeClassName="selected">
        <IconButton aria-label="cart" className={classes.extendedIcon}>
          <Badge badgeContent={cart.length} color="primary">
            <ShoppingCartIcon fontSize="small" />
          </Badge>
        </IconButton>
      </HoverableNavLink>
      <RoundedButton variant="contained" color="secondary">
        Sign In
      </RoundedButton>
    </Box>
  );
};

export default ActionNavButtons;
