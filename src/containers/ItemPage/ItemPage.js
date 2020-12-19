import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Skeleton } from "@material-ui/lab";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ColoredButton from "../../components/ColoredButton/ColoredButton";
import GoBack from "../../components/GoBack/GoBack";
import { HoverableNavLink } from "../../components/HoverableLink/HoverableLink.styled";
import ItemDescription from "../../components/ItemDescription/ItemDescription";
import NotFound from "../../components/NotFound/NotFound";
import { getGarlandById } from "../../utils/API";
import { addToCart } from "../../utils/context/slice/cartSlice";
import {
  links,
  productImages,
  showGarlandsAddedToCart,
} from "../../utils/Utils";
import { ProductImage } from "./ItemPage.styled";

const packagingVariants = {
  standard: { value: 0, title: "Standard" },
  box: { value: 1, title: "Box" },
  present: { value: 2, title: "Present" },
};

const ItemPage = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [item, setItem] = useState();
  const [packaging, setPackaging] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getGarlandById(id)
        .then((res) => {
          setItem(res.data);
          setLoading(false);
        })
        .catch((e) => console.log(e));
    }, 2000);
  }, [id]);

  const handleChangePackaging = (event) => {
    setPackaging(event.target.value);
  };

  const handleChangeQuantity = (event) => {
    setIsValid(event.target.value > 0);
    if (event.target.value > 0) {
      setQuantity(event.target.value);
    }
  };

  const handleBuy = () => {
    let garlandsToAdd = { ...item, quantity: parseInt(quantity) };
    dispatch(addToCart(garlandsToAdd));
    showGarlandsAddedToCart(enqueueSnackbar, quantity);
  };

  return (
    <Box mx={20} pt={15}>
      <GoBack to={links.catalog} />
      {item || isLoading ? (
        <Box display="flex" alignItems="flex-start">
          {isLoading ? (
            <Box ml={10}>
              <Skeleton variant="rect" width={300} height={300} />
            </Box>
          ) : (
            <Box
              component={ProductImage}
              alt="product"
              src={productImages[id] || productImages[0]}
              width="30%"
              ml={10}
            />
          )}
          <Box px={15} width="100%">
            <ItemDescription {...item} isLoading={isLoading} />
            {!isLoading && (
              <>
                <Box display="flex" width="100%" mb={5}>
                  <Box width="50%" mr={2}>
                    <Box
                      component={TextField}
                      width="100%"
                      id="number"
                      label="Quantity"
                      type="number"
                      onChange={handleChangeQuantity}
                      defaultValue={quantity}
                      error={!isValid}
                      helperText={
                        !isValid
                          ? "Incorrect value (should be greater than 0)"
                          : ""
                      }
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </Box>
                  <Box width="50%">
                    <Box
                      component={FormControl}
                      variant="outlined"
                      width="100%"
                    >
                      <InputLabel id="select-label">Packaging</InputLabel>
                      <Box
                        component={Select}
                        labelId="select-label"
                        id="select-packaging"
                        value={packaging}
                        onChange={handleChangePackaging}
                        label="Packaging"
                        width="100%"
                        defaultValue={packagingVariants.standard.value}
                      >
                        <MenuItem value={packagingVariants.standard.value}>
                          {packagingVariants.standard.title}
                        </MenuItem>
                        <MenuItem value={packagingVariants.box.value}>
                          {packagingVariants.box.title}
                        </MenuItem>
                        <MenuItem value={packagingVariants.present.value}>
                          {packagingVariants.present.title}
                        </MenuItem>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box display="flex" width="100%" justifyContent="flex-end">
                  <Box mr={3}>
                    <HoverableNavLink to={`/${links.catalog}`}>
                      <Button color="default" variant="text">
                        Go back
                      </Button>
                    </HoverableNavLink>
                  </Box>
                  <ColoredButton
                    color="success"
                    variant="outlined"
                    disabled={!isValid}
                    onClick={handleBuy}
                  >
                    Add to cart
                  </ColoredButton>
                </Box>
              </>
            )}
          </Box>
        </Box>
      ) : (
        <NotFound backTo={`/${links.catalog}`} />
      )}
    </Box>
  );
};

export default ItemPage;
