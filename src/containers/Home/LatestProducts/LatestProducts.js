import { Box, Divider, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardGridContainer from "../../../components/CardGrid/CardGridContainer";
import RoundedButton from "../../../components/RoundedButton/RoundedButton";
import {
  getAllItems,
  selectItems,
  selectLoading,
} from "../../../utils/context/slice/itemsSlice";
import { StyledToggleLink } from "./LatestProducts.styled";
import ProductsGrid from "./ProductsGrid/ProductsGrid";

const seeMoreText = {
  seeMore: "See more",
  seeLess: "See less",
};

const LatestProducts = () => {
  const dispatch = useDispatch();
  const garlands = useSelector(selectItems);
  const isLoading = useSelector(selectLoading);
  const [naturalFilter, setNaturalFiler] = useState(0);
  const [showAllItems, setShowAllItems] = useState(false);
  const [seeMoreButtonText, setSeeMoreButtonText] = useState(
    seeMoreText.seeMore
  );
  const [itemsToShow, setItemsToShow] = useState([]);

  useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch]);
  useEffect(() => {
    setItemsToShow(garlands.slice(-3).reverse());
  }, [garlands]);

  const handleSeeMore = () => {
    let nextShowAllItems = !showAllItems;
    if (nextShowAllItems) {
      let reversedItems = garlands.slice().reverse();
      setItemsToShow(reversedItems);
      setSeeMoreButtonText(seeMoreText.seeLess);
    } else {
      let lastItems = garlands.slice(-3).reverse();
      setItemsToShow(lastItems);
      setSeeMoreButtonText(seeMoreText.seeMore);
    }
    setShowAllItems(!showAllItems);
  };
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
        <ProductsGrid garlands={itemsToShow} isLoading={isLoading} />
      </CardGridContainer>
      {!isLoading && (
        <Box mx="auto" mt={10}>
          <RoundedButton
            color="secondary"
            variant="contained"
            onClick={handleSeeMore}
          >
            {seeMoreButtonText}
          </RoundedButton>
        </Box>
      )}
    </Box>
  );
};

export default LatestProducts;
