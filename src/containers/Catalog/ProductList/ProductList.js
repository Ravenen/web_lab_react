import { Box, Divider } from "@material-ui/core";
import React, { useState } from "react";
import CardComponent from "../../../components/CardComponent/CardComponent";
import CardGridContainer from "../../../components/CardGrid/CardGridContainer";
import CardGridWrapper from "../../../components/CardGrid/CardGridWrapper";
import { API, tagList } from "../../App/Utils";
import SearchBar from "material-ui-search-bar";
import ChipAutocomplite from "../../../components/ChipAutocomplite/ChipAutocomplite";

const ProductList = () => {
  const [searchValue, setSearchValue] = useState("");
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
          label="Tags"
          placeholder="Select tags..."
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
        {API.getAll().map((garland) => (
          <CardGridWrapper key={garland.id}>
            <CardComponent key={garland.id} {...garland}></CardComponent>
          </CardGridWrapper>
        ))}
      </CardGridContainer>
    </Box>
  );
};

export default ProductList;
