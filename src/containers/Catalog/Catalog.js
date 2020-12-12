import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import ProductList from "./ProductList/ProductList";

const Catalog = () => {
  return (
    <div>
      <PageHeader>Product Catalog</PageHeader>
      <ProductList />
    </div>
  );
};

export default Catalog;
