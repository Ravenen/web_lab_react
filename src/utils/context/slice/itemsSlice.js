import { createSlice } from "@reduxjs/toolkit";
import { getAllGarlands } from "../../API";

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    isLoading: true,
    items: [],
  },
  reducers: {
    initItems: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    loadingItems: (state) => {
      state.items = [];
      state.isLoading = true;
    },
  },
});

const { initItems, loadingItems } = itemsSlice.actions;

export const getAllItems = () => (dispatch) => {
  dispatch(loadingItems());
  setTimeout(() => {
    getAllGarlands()
      .then((res) => dispatch(initItems(res.data)))
      .catch((e) => console.log(e));
  }, 2000);
};

export const selectItems = (state) => state.items.items;
export const selectLoading = (state) => state.items.isLoading;

export default itemsSlice.reducer;
