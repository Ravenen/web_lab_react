import { Box } from "@material-ui/core";
import React from "react";
import { HoverableAnchorLink } from "../HoverableLink/HoverableLink.styled";

const IconWrapper = ({ children, ...props }) => {
  return (
    <Box component={HoverableAnchorLink} {...props} mx={1}>
      {children}
    </Box>
  );
};

export default IconWrapper;
