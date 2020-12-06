import React from "react";
import CatalogHeader from "./CatalogHeader/CatalogHeader";
import ProductList from "./ProductList/ProductList";

const Catalog = () => {
  return (
    <div>
      <CatalogHeader />
      <ProductList />
    </div>
  );
};

export default Catalog;
