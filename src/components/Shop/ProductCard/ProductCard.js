import React from "react";
import { Card, Stack } from "react-bootstrap";
import { CardBody, CardImage } from "./ProductCard.styled";
import Typography from "../../Shared/UI/Typography/Typography";

const ProductCard = ({ product }) => {

  return (
    <Card className="border-0">
      <CardImage variant="top" src={product.image} />
      <CardBody className=" px-4 d-flex flex-column align-items-center ">
        <Card.Title className="mt-2">
          <Typography color="black" className="mb-0" fs="fs4">
            {product.title}
          </Typography>
        </Card.Title>
        <Stack
          direction="horizontal"
          gap={3}
          className="justify-content-center mb-3"
        >
          <img src="/images/star.svg" alt="star.img" width="30px"/>
          <img src="/images/star.svg" alt="star.img" width="30px"/>
          <img src="/images/star.svg" alt="star.img" width="30px"/>
          <img src="/images/star.svg" alt="star.img" width="30px"/>
          <img src="/images/star.svg" alt="star.img" width="30px"/>
        </Stack>
        <Typography color="grey" fs="fs4" textTransform="capitalize">
          {product.category}
        </Typography>
        <Stack
          direction="horizontal"
          gap={2}
          className="justify-content-center align-items-center mt-2"
        >
          <Typography color="primary" fs="fs5">
            ${product.price}
          </Typography>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;