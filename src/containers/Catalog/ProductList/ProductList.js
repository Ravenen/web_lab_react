import { Box, Divider, Slider, Typography } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardGridContainer from "../../../components/CardGrid/CardGridContainer";
import ChipAutocomplite from "../../../components/ChipAutocomplite/ChipAutocomplite";
import {
  getAllItems,
  getFilteredItems,
  selectItems,
  selectLoading,
} from "../../../utils/context/slice/itemsSlice";
import { removeUnderscoreFromString, tagList } from "../../../utils/Utils";
import ProductsGrid from "./ProductsGrid/ProductsGrid";

const ProductList = () => {
  const dispatch = useDispatch();
  const garlands = useSelector(selectItems);
  const isLoading = useSelector(selectLoading);

  const [items, setItems] = useState(garlands);
  const [searchValue, setSearchValue] = useState("");
  const [tagsFilter, setTagsFilter] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 3000]);

  useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch]);
  useEffect(() => {
    setItems(garlands);
  }, [garlands]);

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

  const handleSearchRequest = () => {
    dispatch(getFilteredItems(tagsFilter, priceRange));
  };

  useEffect(() => {
    let newItems;
    newItems = garlands.filter(
      (item) => item.color.includes(searchValue) || !searchValue.length
    );
    setItems(newItems);
  }, [searchValue]);

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
          onRequestSearch={handleSearchRequest}
        />
      </Box>
      <Box mt={3} mb={5}>
        <Divider />
      </Box>
      <CardGridContainer>
        <ProductsGrid garlands={items} isLoading={isLoading} />
      </CardGridContainer>
    </Box>
  );
};

export default ProductList;
