import { Box, Typography } from "@material-ui/core";
import React from "react";
import BooleanText from "../BooleanText/BooleanText";
import TagsComponent from "../TagsComponent/TagsComponent";

const ItemDescription = (props) => {
  return (
    <div>
      <Box mb={2}>
        <Typography variant="h4">Garland</Typography>
      </Box>
      <Box mb={2}>
        <TagsComponent tags={props.decor_type} />
      </Box>
      <Box mb={2}>
        <Typography variant="body2">
          <Box lineHeight={1.7} component="span">
            Cillum duis eu ea tempor in irure sunt tempor elit nulla sit ex.
            Anim ipsum incididunt commodo elit elit irure irure. Lorem irure
            nisi incididunt sint elit laboris.
          </Box>
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="body1">
          <Box lineHeight={1.7} component="span">
            Color: {props.color} <br />
            Length: {props.length_in_metres}m <br />
            Natural: <BooleanText boolean={props.is_natural} />
          </Box>
        </Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="h5" component="p">
          Price: {props.price_in_uah} UAH
        </Typography>
      </Box>
    </div>
  );
};

export default ItemDescription;
