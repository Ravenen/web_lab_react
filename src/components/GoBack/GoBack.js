import { Box } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import React from "react";
import { HoverableNavLink } from "../../components/HoverableLink/HoverableLink.styled";

const GoBack = ({ to }) => {
  return (
    <Box mb={5}>
      <HoverableNavLink to={`/${to}`}>
        <ArrowBackIosIcon />
      </HoverableNavLink>
    </Box>
  );
};

export default GoBack;
