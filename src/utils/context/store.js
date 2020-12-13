import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./slice/itemsSlice";
import cartReducer from "./slice/cartSlice";

export default configureStore({
  reducer: {
    items: itemsReducer,
    cart: cartReducer,
  },
});
