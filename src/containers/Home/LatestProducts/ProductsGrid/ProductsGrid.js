import React from "react";
import ViewCardComponent from "../../../../components/CardComponent/ViewCardComponent";
import CardGridWrapper from "../../../../components/CardGrid/CardGridWrapper";

const ProductsGrid = ({ garlands, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <>
          {[0, 0, 0].map((item, index) => (
            <CardGridWrapper key={index}>
              <ViewCardComponent key={index} isLoading={true} />
            </CardGridWrapper>
          ))}
        </>
      ) : (
        <>
          {garlands.map((garland) => (
            <CardGridWrapper key={garland.id}>
              <ViewCardComponent key={garland.id} {...garland} />
            </CardGridWrapper>
          ))}
        </>
      )}
    </>
  );
};

export default ProductsGrid;
