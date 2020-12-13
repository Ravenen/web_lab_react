import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let foundCart = state.cart.find((item) => item.id === action.payload.id);
      if (foundCart) {
        foundCart.quantity += action.payload.quantity;
      } else {
        state.cart = [...state.cart, action.payload];
      }
      console.log(state.cart);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;

export default cartSlice.reducer;
