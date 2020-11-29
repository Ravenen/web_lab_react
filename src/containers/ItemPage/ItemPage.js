import { Box } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import ItemDescription from "../../components/ItemDescription/ItemDescription";
import { API, productImages } from "../App/Utils";

const ItemPage = () => {
  const { id } = useParams();
  const item = API.getById(parseInt(id));
  console.log(item);
  return (
    <Box mx={20} pt={20}>
      <Box display="flex" mx="auto" alignItems="flex-start">
        <Box
          component="img"
          alt="hero"
          src={productImages[id] || productImages[0]}
          // height="80%"
          width="30%"
          ml={10}
          // mr={15}
        />
        <Box px={15}>
          <ItemDescription {...item} />
        </Box>
      </Box>
    </Box>
  );
};

export default ItemPage;
