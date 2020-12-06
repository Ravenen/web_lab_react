import axios from "axios";

const axiosBase = axios.create({
  baseURL: "http://localhost:5000/garlands",
});

export const getAllGarlands = () => axiosBase.get();
export const getFilteredGarlands = (tags, priceRange) => {
  let tagsString = "tags=" + tags.join(",");
  let priceRangeString = "price=" + priceRange.join(",");
  return axiosBase.get(`?${tagsString}&${priceRangeString}`);
};
