import { Badge, Box, IconButton, makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useLocalStorage from "@rehooks/local-storage";
import React from "react";
import { useSelector } from "react-redux";
import { HoverableNavLink } from "../../../components/HoverableLink/HoverableLink.styled";
import RoundedButton from "../../../components/RoundedButton/RoundedButton";
import { selectCart } from "../../../utils/context/slice/cartSlice";
import { links, loginKeyName } from "../../../utils/Utils";

const useStyles = makeStyles((theme) => ({
  extendedIcon: {
    marginRight: theme.spacing(5),
  },
}));

const ActionNavButtons = () => {
  const classes = useStyles();
  const cart = useSelector(selectCart);
  const [email, setEmail, deleteEmail] = useLocalStorage(loginKeyName);

  const handleSignOut = () => {
    deleteEmail();
  };

  return (
    <Box display="flex">
      <HoverableNavLink exact to={`/${links.cart}`} activeClassName="selected">
        <IconButton aria-label="cart" className={classes.extendedIcon}>
          <Badge badgeContent={cart.length} color="primary">
            <ShoppingCartIcon fontSize="small" />
          </Badge>
        </IconButton>
      </HoverableNavLink>
      <RoundedButton
        variant="contained"
        color="secondary"
        onClick={handleSignOut}
      >
        Sign Out
      </RoundedButton>
    </Box>
  );
};

export default ActionNavButtons;
