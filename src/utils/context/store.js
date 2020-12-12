import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./slice/itemsSlice";

export default configureStore({
  reducer: {
    items: itemsReducer,
  },
});
