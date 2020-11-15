import { Box, Divider, Grid, Link, Typography } from "@material-ui/core";
import React from "react";
import CardComponent from "../../../components/CardComponent/CardComponent";

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
  console.log(API.getAll());
  return (
    <Box mx={30} my={10}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <Box flexGrow={1}>
              <Typography variant="h3">Latest Products</Typography>
            </Box>
            <Box p={1}>
              <Link>All</Link>
            </Box>
            <Box p={1}>
              <Link>Natural</Link>
            </Box>
          </Box>
          <Box mt={3} mb={5}>
            <Divider />
          </Box>
        </Grid>
        {API.getAll().map((garland) => (
          <Grid item sm={12} md={6} lg={4}>
            <CardComponent {...garland}></CardComponent>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestProducts;
