import { Box, Chip } from "@material-ui/core";
import React from "react";
import { removeUnderscoreFromString } from "../../containers/App/Utils";

const TagsComponent = ({ tags, ...props }) => {
  return (
    <Box display="flex" flexWrap="wrap" my={1.5} key={props.key}>
      {tags.map((tag, idx) => (
        <Box
          mx={0.5}
          my={0.5}
          component={Chip}
          label={removeUnderscoreFromString(tag)}
          key={props.key + "-" + idx}
        />
      ))}
    </Box>
  );
};

export default TagsComponent;
