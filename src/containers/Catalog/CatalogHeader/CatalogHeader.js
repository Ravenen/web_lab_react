import { Box, Typography } from "@material-ui/core";
import React from "react";
import { CatalogHeaderWrap } from "./CatalogHeader.styled";

const CatalogHeader = () => {
  return (
    <CatalogHeaderWrap>
      <Box display="flex" py={15} mb={10}>
        <Box mx="auto">
          <Typography variant="h2">Product Catalog</Typography>
        </Box>
      </Box>
    </CatalogHeaderWrap>
  );
};

export default CatalogHeader;
