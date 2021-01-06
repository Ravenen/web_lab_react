import { Box, Typography } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import React from "react";
import { HoverableNavLink } from "../../components/HoverableLink/HoverableLink.styled";
import { links } from "../../utils/Utils";

const Success = () => {
  return (
    <Box mx={20} pt={15}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box component={Typography} variant="h3" py={5}>
          Success!
        </Box>
        <Alert severity="success">
          <AlertTitle>Success!</AlertTitle>
          Wow! Amazing! You did it! Aren't you tired? Hope you're proud of
          yourself, jerk
        </Alert>
        <Box mt={10}>
          <Box component={Typography} variant="body1" textAlign="center">
            <HoverableNavLink
              to={links.catalog}
              style={{ textDecoration: "underline" }}
            >
              Go Back to Catalog
            </HoverableNavLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Success;
