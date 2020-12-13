import { Box, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import { formatUah } from "../../utils/Utils";
import BooleanText from "../BooleanText/BooleanText";
import TagsComponent from "../TagsComponent/TagsComponent";

const ItemDescription = (props) => {
  const isLoading = props.isLoading || false;
  return (
    <Box width="auto">
      <Box mb={2}>
        <Typography variant="h4">
          {isLoading ? <Skeleton width="30%" /> : "Garland"}
        </Typography>
      </Box>
      <Box mb={2}>
        {isLoading ? (
          <Skeleton width="40%" />
        ) : (
          <TagsComponent tags={props.decor_type} />
        )}
      </Box>
      <Box mb={2}>
        <Typography variant="body2">
          {!isLoading && (
            <Box lineHeight={1.7} component="span">
              Cillum duis eu ea tempor in irure sunt tempor elit nulla sit ex.
              Anim ipsum incididunt commodo elit elit irure irure. Lorem irure
              nisi incididunt sint elit laboris.
            </Box>
          )}
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="body1">
          {isLoading ? (
            <Box component="span">
              <Skeleton width="35%" />
              <Skeleton width="40%" />
              <Skeleton width="35%" />
            </Box>
          ) : (
            <Box lineHeight={1.7} component="span">
              Color: {props.color} <br />
              Length: {props.length_in_metres}m <br />
              Natural: <BooleanText boolean={props.is_natural} />
            </Box>
          )}
        </Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="h5" component="p">
          {isLoading ? (
            <Skeleton width="40%" />
          ) : (
            `Price: ${formatUah(props.price_in_uah)}`
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default ItemDescription;
