import { Box, Divider, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import RoundedButton from "../../../components/RoundedButton/RoundedButton";
import CardGridContainer from "../../../components/CardGrid/CardGridContainer";
import { StyledToggleLink } from "./LatestProducts.styled";
import { useGlobalContext } from "../../../utils/Contexts";
import { getAllGarlands } from "../../../utils/API";
import { INIT_GARLANDS } from "../../../utils/ActionTypes";
import ProductsGrid from "./ProductsGrid/ProductsGrid";

const seeMoreText = {
  seeMore: "See more",
  seeLess: "See less",
};

const LatestProducts = () => {
  const { garlands, dispatch } = useGlobalContext();
  const [isLoading, setLoading] = useState(true);
  const [naturalFilter, setNaturalFiler] = useState(0);
  const [showAllItems, setShowAllItems] = useState(false);
  const [seeMoreButtonText, setSeeMoreButtonText] = useState(
    seeMoreText.seeMore
  );
  const [itemsToShow, setItemsToShow] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getAllGarlands()
        .then((res) => {
          dispatch({ type: INIT_GARLANDS, payload: res.data });
        })
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    }, 3000);
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
