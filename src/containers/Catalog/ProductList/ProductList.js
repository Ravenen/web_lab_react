import { Box, Divider, Slider, Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import CardComponent from "../../../components/CardComponent/CardComponent";
import CardGridContainer from "../../../components/CardGrid/CardGridContainer";
import CardGridWrapper from "../../../components/CardGrid/CardGridWrapper";
import { removeUnderscoreFromString, tagList } from "../../../utils/Utils";
import SearchBar from "material-ui-search-bar";
import ChipAutocomplite from "../../../components/ChipAutocomplite/ChipAutocomplite";
import { ItemsContext } from "../../../utils/Contexts";

const ProductList = () => {
  const { allItems } = useContext(ItemsContext);

  const [items, setItems] = useState(allItems);

  const [searchValue, setSearchValue] = useState("");
  const [tagsFilter, setTagsFilter] = useState([]);
  const [priceRange, setPriceRange] = useState([0, Infinity]);

  const handleTagsFilter = (event, values) => {
    setTagsFilter(values);
  };

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const handleCancelSearch = () => {
    setSearchValue("");
  };

  const handleRange = (event, value) => {
    setPriceRange(value);
  };

  useEffect(() => {
    let newItems;
    newItems = allItems.filter(
      (item) =>
        tagsFilter.every((tag) => item.decor_type.indexOf(tag) >= 0) ||
        !tagsFilter.length
    );
    newItems = newItems.filter(
      (item) => item.color.includes(searchValue) || !searchValue.length
    );
    newItems = newItems.filter(
      (item) =>
        item.price_in_uah >= priceRange[0] && item.price_in_uah <= priceRange[1]
    );

    setItems(newItems);
  }, [tagsFilter, searchValue, priceRange]);

  return (
    <Box mx={30} mt={10} mb={5} display="flex" flexDirection="column">
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <ChipAutocomplite
          width={300}
          dataSource={tagList}
          getOptionLabel={(option) => removeUnderscoreFromString(option)}
          label="Tags"
          placeholder="Select tags..."
          onChange={handleTagsFilter}
        />
        <Box width="30%">
          <Typography id="range-slider" gutterBottom color="textSecondary">
            Price range
          </Typography>
          <Slider
            value={priceRange}
            onChange={handleRange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            max={3000}
            step={100}
            // getAriaValueText={valuetext}
          />
        </Box>
        <SearchBar
          value={searchValue}
          onChange={handleSearch}
          onCancelSearch={handleCancelSearch}
          placeholder="Search by color"
          // onRequestSearch={() => doSomethingWith(this.state.value)}
        />
      </Box>
      <Box mt={3} mb={5}>
        <Divider />
      </Box>
      <CardGridContainer>
        {items.map((garland) => (
          <CardGridWrapper key={garland.id}>
            <CardComponent key={garland.id} {...garland}></CardComponent>
          </CardGridWrapper>
        ))}
      </CardGridContainer>
    </Box>
  );
};

export default ProductList;
