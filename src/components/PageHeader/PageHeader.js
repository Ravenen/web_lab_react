import { Box, Typography } from "@material-ui/core";
import React from "react";
import { CatalogHeaderWrap as PageHeaderWrap } from "./PageHeader.styled";

const PageHeader = ({ children }) => {
  return (
    <PageHeaderWrap>
      <Box display="flex" py={15} mb={10}>
        <Box mx="auto">
          <Typography variant="h2">{children}</Typography>
        </Box>
      </Box>
    </PageHeaderWrap>
  );
};

export default PageHeader;
