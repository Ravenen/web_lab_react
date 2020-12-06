import { Box, Divider, Typography } from "@material-ui/core";
import React, { useState } from "react";
import CardComponent from "../../../components/CardComponent/CardComponent";
import RoundedButton from "../../../components/RoundedButton/RoundedButton";
import CardGridContainer from "../../../components/CardGrid/CardGridContainer";
import CardGridWrapper from "../../../components/CardGrid/CardGridWrapper";
import { StyledToggleLink } from "./LatestProducts.styled";
import { API } from "../../App/Utils";
import ViewCardComponent from "../../../components/CardComponent/ViewCardComponent";

const LatestProducts = (props) => {
  const [naturalFilter, setNaturalFiler] = useState(0);
  return (
    <Box mx={30} mt={10} mb={5} display="flex" flexDirection="column">
      <Box display="flex" alignItems="center">
        <Box flexGrow={1}>
          <Typography variant="h3">Latest Products</Typography>
        </Box>
        <Box p={1}>
          <StyledToggleLink
            onClick={() => setNaturalFiler(0)}
            selected={!naturalFilter}
          >
            All
          </StyledToggleLink>
        </Box>
        <Box p={1}>
          <StyledToggleLink
            onClick={() => setNaturalFiler(1)}
            selected={naturalFilter}
          >
            Natural
          </StyledToggleLink>
        </Box>
      </Box>
      <Box mt={3} mb={5}>
        <Divider />
      </Box>
      <CardGridContainer>
        {API.getAll()
          .slice(-3)
          .map((garland) => (
            <CardGridWrapper key={garland.id}>
              <ViewCardComponent
                key={garland.id}
                {...garland}
              ></ViewCardComponent>
            </CardGridWrapper>
          ))}
      </CardGridContainer>
      <Box mx="auto" mt={10}>
        <RoundedButton color="secondary" variant="contained">
          See more
        </RoundedButton>
      </Box>
    </Box>
  );
};

export default LatestProducts;
