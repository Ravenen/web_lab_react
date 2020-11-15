import { Box, Chip } from "@material-ui/core";
import React from "react";

const TagsComponent = ({ tags }) => {
  return (
    <Box display="flex" my={1.5}>
      {tags.map((tag) => (
        <Box mx={0.5} component={Chip} label={tag} />
      ))}
    </Box>
  );
};

export default TagsComponent;
