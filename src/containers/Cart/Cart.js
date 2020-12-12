import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import CartList from "./CartList/CartList";

const Cart = () => {
  return (
    <div>
      <PageHeader>Cart List</PageHeader>
      <CartList />
    </div>
  );
};

export default Cart;
