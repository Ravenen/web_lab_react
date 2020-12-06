import { Box, Typography, useTheme } from "@material-ui/core";
import React from "react";
import TagsComponent from "../TagsComponent/TagsComponent";

const CardDescription = (props) => {
  return (
    <Box lineHeight={1.5} key={props.key}>
      <Typography variant="body2" color="textSecondary" component="p">
        Color: {props.color} <br />
        Length: {props.length_in_metres}m <br />
        Natural: <BooleanText boolean={props.is_natural} />
      </Typography>
      <TagsComponent key={props.key} tags={props.decor_type} />
      <Typography variant="body2" color="textPrimary" component="p">
        Price: {props.price_in_uah} UAH
      </Typography>
    </Box>
  );
};

const BooleanText = ({ boolean }) => {
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

export default CardDescription;
