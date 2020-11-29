import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDescription from "../../components/ItemDescription/ItemDescription";
import { API, productImages } from "../App/Utils";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { HoverableNavLink } from "../../components/HoverableLink/HoverableLink.styled";
import { ProductImage } from "./ItemPage.styled";

const packaging = {
  standard: { value: 0, title: "Standard" },
};

const ItemPage = () => {
  const { id } = useParams();
  const item = API.getById(parseInt(id));
  const [packaging, setPackaging] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChangePackaging = (event) => {
    setPackaging(event.target.value);
  };
  const handleChangeQuantity = (event) => {
    setIsValid(event.target.value > 0);
  };
  return (
    <Box mx={20} pt={15}>
      <Box mb={5}>
        <HoverableNavLink to="/catalog">
          <ArrowBackIosIcon />
        </HoverableNavLink>
      </Box>
      <Box display="flex" mx="auto" alignItems="flex-start">
        <Box
          component={ProductImage}
          alt="product"
          src={productImages[id] || productImages[0]}
          width="30%"
          ml={10}
        />
        <Box px={15}>
          <ItemDescription {...item} />
          <Box display="flex" width="100%">
            <Box width="50%" mr={2}>
              <Box
                component={TextField}
                width="100%"
                id="number"
                label="Quantity"
                type="number"
                onChange={handleChangeQuantity}
                error={!isValid}
                helperText={
                  !isValid ? "Incorrect value (should be greater than 0)" : ""
                }
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Box>
            <Box width="50%">
              <Box component={FormControl} variant="outlined" width="100%">
                <InputLabel id="select-label">Packaging</InputLabel>
                <Box
                  component={Select}
                  labelId="select-label"
                  id="select-packaging"
                  value={packaging}
                  onChange={handleChangePackaging}
                  label="Packaging"
                  width="100%"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemPage;
