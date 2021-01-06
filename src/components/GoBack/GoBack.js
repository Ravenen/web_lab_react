import { Box, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import React from "react";
import { useHistory } from "react-router-dom";

const GoBack = ({ to }) => {
  const history = useHistory();
  const handleOnClick = () => {
    history.goBack();
  };
  return (
    <Box mb={5}>
      <IconButton onClick={handleOnClick}>
        <ArrowBackIosIcon />
      </IconButton>
    </Box>
  );
};

export default GoBack;
