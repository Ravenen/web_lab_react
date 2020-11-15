import { Box, Chip } from "@material-ui/core";
import React from "react";

const TagsComponent = ({ tags, ...props }) => {
  return (
    <Box display="flex" my={1.5} key={props.key}>
      {tags.map((tag, idx) => (
        <Box
          mx={0.5}
          component={Chip}
          label={tag}
          key={String(props.key) + idx}
        />
      ))}
    </Box>
  );
};

export default TagsComponent;
