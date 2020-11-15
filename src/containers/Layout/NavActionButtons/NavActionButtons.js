import React from "react";
import { Badge, IconButton } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStyles, StyledButtonsDiv } from "./NavActionButtons.styled";
import RoundedButton from "../../../components/RoundedButton/RoundedButton";

const ActionNavButtons = () => {
  const classes = useStyles();

  return (
    <StyledButtonsDiv>
      <IconButton aria-label="cart" className={classes.extendedIcon}>
        <Badge badgeContent={2} color="primary">
          <ShoppingCartIcon fontSize="small" />
        </Badge>
      </IconButton>
      <RoundedButton variant="contained" color="secondary">
        Sign In
      </RoundedButton>
    </StyledButtonsDiv>
  );
};

export default ActionNavButtons;
