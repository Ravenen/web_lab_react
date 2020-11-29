import { Box, Divider, Typography } from "@material-ui/core";
import React, { useState } from "react";
import ViewCardComponent from "../../../components/CardComponent/ViewCardComponent";
import RoundedButton from "../../../components/RoundedButton/RoundedButton";
import CardGridContainer from "../../../components/CardGrid/CardGridContainer";
import CardGridWrapper from "../../../components/CardGrid/CardGridWrapper";
import { StyledToggleLink } from "./LatestProducts.styled";
import { API } from "../../App/Utils";

const seeMoreText = {
  seeMore: "See more",
  seeLess: "See less",
};

const LatestProducts = () => {
  const [naturalFilter, setNaturalFiler] = useState(0);
  const [showAllItems, setShowAllItems] = useState(false);
  const [seeMoreButtonText, setSeeMoreButtonText] = useState(
    seeMoreText.seeMore
  );
  const [itemsToShow, setItemsToShow] = useState(
    API.getAll().slice(-3).reverse()
  );
  const handleSeeMore = () => {
    let nextShowAllItems = !showAllItems;
    if (nextShowAllItems) {
      let allItems = API.getAll().slice().reverse();
      setItemsToShow(allItems);
      setSeeMoreButtonText(seeMoreText.seeLess);
    } else {
      let lastItems = API.getAll().slice(-3).reverse();
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
        {itemsToShow.map((garland) => (
          <CardGridWrapper key={garland.id}>
            <ViewCardComponent
              key={garland.id}
              {...garland}
            ></ViewCardComponent>
          </CardGridWrapper>
        ))}
      </CardGridContainer>
      <Box mx="auto" mt={10}>
        <RoundedButton
          color="secondary"
          variant="contained"
          onClick={handleSeeMore}
        >
          {seeMoreButtonText}
        </RoundedButton>
      </Box>
    </Box>
  );
};

export default LatestProducts;
