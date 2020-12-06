import { Box, Typography } from "@material-ui/core";
import React from "react";
import { HoverableNavLink } from "../HoverableLink/HoverableLink.styled";

const NotFound = ({ backTo }) => {
  return (
    <Box>
      <Box textAlign="center" mb={2}>
        <Typography variant="h1">404</Typography>
      </Box>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4">Not Found</Typography>
      </Box>
      <Box component={Typography} variant="body1" textAlign="center">
        <HoverableNavLink to={backTo} style={{ textDecoration: "underline" }}>
          Go back and let's try again!
        </HoverableNavLink>
      </Box>
    </Box>
  );
};

export default NotFound;
