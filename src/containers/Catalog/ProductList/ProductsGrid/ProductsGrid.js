import React from "react";
import CardComponent from "../../../../components/CardComponent/CardComponent";
import CardGridWrapper from "../../../../components/CardGrid/CardGridWrapper";

const ProductsGrid = ({ garlands, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <>
          {[0, 0, 0].map((item, index) => (
            <CardGridWrapper key={index}>
              <CardComponent key={index} isLoading={true}></CardComponent>
            </CardGridWrapper>
          ))}
        </>
      ) : (
        <>
          {garlands.map((garland) => (
            <CardGridWrapper key={garland.id}>
              <CardComponent key={garland.id} garland={garland}></CardComponent>
            </CardGridWrapper>
          ))}
        </>
      )}
    </>
  );
};

export default ProductsGrid;
