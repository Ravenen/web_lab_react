import { Box, Divider, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import CardComponent from "../../../components/CardComponent/CardComponent";
import RoundedButton from "../../../components/RoundedButton/RoundedButton";
import { StyledToggleLink } from "./LatestProducts.styled";

const API = {
  garlands: [
    {
      id: 1,
      color: "red",
      length_in_metres: 12,
      is_natural: true,
      decor_type: ["outdoor", "tree"],
      price_in_uah: 1200.5,
    },
    {
      id: 2,
      color: "red",
      length_in_metres: 12,
      is_natural: false,
      decor_type: ["outdoor", "tree"],
      price_in_uah: 1200.5,
    },
    {
      id: 3,
      color: "red",
      length_in_metres: 12,
      is_natural: true,
      decor_type: ["outdoor", "tree"],
      price_in_uah: 1200.5,
    },
  ],
  getAll: function () {
    return this.garlands;
  },
};

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
      <Grid container spacing={3}>
        {API.getAll().map((garland, idx) => (
          <Grid item sm={12} md={6} lg={4} key={idx}>
            <CardComponent key={idx} {...garland}></CardComponent>
          </Grid>
        ))}
      </Grid>
      <Box mx="auto" mt={10}>
        <RoundedButton color="secondary" variant="contained">
          See more
        </RoundedButton>
      </Box>
    </Box>
  );
};

export default LatestProducts;
