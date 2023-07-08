import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import { styled } from "styled-components";

const StyledRow = styled(Row)`
  width: 75%;

  @media (max-width: 898px) {
    width: 100%;
  }
`;

const Products = ({ data }) => {
  return (
    <StyledRow className="ps-lg-4 py-5 py-lg-0">
      {data?.map((item) => {
        return (
          <Col md={6} className="mb-3" key={item.id}>
            <ProductCard product={item} />
          </Col>
        );
      })}
    </StyledRow>
  );
};

export default Products;