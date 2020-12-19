import { Box } from "@material-ui/core";
import React from "react";
import GoBack from "../../components/GoBack/GoBack";
import { links } from "../../utils/Utils";

const Checkout = () => {
  return (
    <Box mx={20} pt={15}>
      <GoBack to={links.cart} />
    </Box>
  );
};

export default Checkout;
