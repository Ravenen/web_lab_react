import defaultImg from "../img/default.png";
import garland1 from "../img/product/garland1.jpg";
import garland2 from "../img/product/garland2.jpg";
import garland3 from "../img/product/garland3.jpg";
import garland4 from "../img/product/garland4.jpg";
import garland5 from "../img/product/garland5.jpg";
import garland6 from "../img/product/garland6.jpg";
import garland7 from "../img/product/garland7.jpg";

export const API = {
  garlands: [
    {
      id: 1,
      color: "red",
      length_in_metres: 12,
      is_natural: true,
      decor_type: ["outdoor_tree", "indoor_tree"],
      price_in_uah: 1200.5,
    },
    {
      id: 2,
      color: "blue",
      length_in_metres: 2,
      is_natural: false,
      decor_type: ["door", "working_place", "house_interior"],
      price_in_uah: 500.0,
    },
    {
      id: 3,
      color: "green",
      length_in_metres: 5,
      is_natural: true,
      decor_type: ["indoor_tree", "house_interior"],
      price_in_uah: 699.99,
    },
    {
      id: 4,
      color: "white",
      length_in_metres: 2,
      is_natural: false,
      decor_type: ["indoor_tree"],
      price_in_uah: 150.0,
    },
    {
      id: 5,
      color: "red",
      length_in_metres: 6,
      is_natural: false,
      decor_type: [
        "indoor_tree",
        "outdoor_tree",
        "house_interior",
        "house_exterior",
      ],
      price_in_uah: 1500.0,
    },
    {
      id: 6,
      color: "green",
      length_in_metres: 1,
      is_natural: true,
      decor_type: ["working_place"],
      price_in_uah: 119.99,
    },
    {
      id: 7,
      color: "rainbow",
      length_in_metres: 3,
      is_natural: false,
      decor_type: ["door"],
      price_in_uah: 150.0,
    },
  ],
  getAll: function () {
    return this.garlands;
  },
  getById: function (id) {
    return this.garlands.find((item) => item.id === id);
  },
};

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

export const links = {
  home: "",
  catalog: "catalog",
  blog: "blog",
  cart: "cart",
};
