import React from "react";
import Carousel from "react-bootstrap/Carousel";
import brand1 from "../../../assets/Brands/brand1.jpg";
import brand2 from "../../../assets/Brands/brand2.jpg";

const BrandCarosul = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={brand2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={brand1} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarosul;
