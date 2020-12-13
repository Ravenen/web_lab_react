import defaultImg from "../img/default.png";
import garland1 from "../img/product/garland1.jpg";
import garland2 from "../img/product/garland2.jpg";
import garland3 from "../img/product/garland3.jpg";
import garland4 from "../img/product/garland4.jpg";
import garland5 from "../img/product/garland5.jpg";
import garland6 from "../img/product/garland6.jpg";
import garland7 from "../img/product/garland7.jpg";

export const tagList = [
  "outdoor_tree",
  "indoor_tree",
  "house_interior",
  "house_exterior",
  "working_place",
  "door",
];

export const productImages = [
  defaultImg,
  garland1,
  garland2,
  garland3,
  garland4,
  garland5,
  garland6,
  garland7,
];

export const removeUnderscoreFromString = (str) => {
  return str.replace("_", " ");
};

export const showGarlandsAddedToCart = (enqueueSnackbar, quantity) => {
  let pluralEnding = quantity > 1 ? "s" : "";
  let verb = quantity > 1 ? "were" : "was";
  enqueueSnackbar(`${quantity} garland${pluralEnding} ${verb} added to cart!`, {
    variant: "success",
    autoHideDuration: 5000,
  });
};

export const links = {
  home: "",
  catalog: "catalog",
  blog: "blog",
  cart: "cart",
};
