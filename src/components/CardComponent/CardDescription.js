import { Box, Typography } from "@material-ui/core";
import React from "react";
import { formatUah } from "../../utils/Utils";
import BooleanText from "../BooleanText/BooleanText";
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
        Price: {formatUah(props.price_in_uah)}
      </Typography>
    </Box>
  );
};

export default CardDescription;
