import { Box, Divider } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import CardComponent from "../../../components/CardComponent/CardComponent";
import CardGridContainer from "../../../components/CardGrid/CardGridContainer";
import CardGridWrapper from "../../../components/CardGrid/CardGridWrapper";
import { API, removeUnderscoreFromString, tagList } from "../../App/Utils";
import SearchBar from "material-ui-search-bar";
import ChipAutocomplite from "../../../components/ChipAutocomplite/ChipAutocomplite";

const ProductList = () => {
  const allItems = useRef([]);
  useEffect(() => {
    allItems.current = API.getAll();
  }, []);

  const [items, setItems] = useState(allItems.current);

  const [searchValue, setSearchValue] = useState("");
  const [tagsFilter, setTagsFilter] = useState([]);

  const handleTagsFilter = (event, values) => {
    setTagsFilter(values);
  };

  useEffect(() => {
    let newItems = allItems.current.filter(
      (item) =>
        tagsFilter.every((tag) => item.decor_type.indexOf(tag) >= 0) ||
        !tagsFilter.length
    );

    setItems(newItems);
  }, [tagsFilter]);

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
        <SearchBar
          value={searchValue}
          onChange={(newValue) => setSearchValue(newValue)}
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
