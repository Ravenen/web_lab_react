import { Box, useTheme } from "@material-ui/core";
import React from "react";

export const BooleanText = ({ boolean }) => {
  const theme = useTheme();
  const booleanToText = (boolValue) => {
    return boolValue ? "Yes" : "No";
  };

  const booleanToColor = (boolValue) => {
    return boolValue ? theme.palette.success.main : theme.palette.error.main;
  };
  return (
    <Box component="span" color={booleanToColor(boolean)} fontWeight="bold">
      {booleanToText(boolean)}
    </Box>
  );
};

export default BooleanText;
