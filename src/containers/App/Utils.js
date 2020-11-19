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
};

export const tagList = [
  "outdoor tree",
  "indoor tree",
  "house interior",
  "house exterior",
  "working place",
  "door",
];
