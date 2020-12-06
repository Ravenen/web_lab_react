import axios from "axios";

const axiosBase = axios.create({
  baseURL: "http://localhost:5000/garlands",
});

export const getAllGarlands = () => axiosBase.get();
export const getFilteredGarlands = (tags, priceRange) => {
  let tagsString = tags.join(",");
  let priceRangeString = priceRange.join(",");
  let customParams = { tags: tagsString, price: priceRangeString };
  return axiosBase.get("", { params: customParams });
};
export const getGarlandById = (id) => axiosBase.get(id);
