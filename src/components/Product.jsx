import React from "react";
import { product } from "../data";
import Cards from "./Cards";

const Product = () => {
  const { title, subtitle } = product;
  return (
    <section className="section">
      <div className="container mx-auto">
        {/* title & subtitle*/}
        <div className="flex flex-col items-center lg:flex-row mb-10 lg:mb-20">
          <h2
            className="section-title"
            data-aos="zoom-in"
            data-aos-offset="400"
            data-aos-delay="200"
          >
            {title}
          </h2>
          <p className="lead lg:max-w-[350px]"
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-delay="200">{subtitle}</p>
        </div>
        {/* cards */}
        <Cards />
      </div>
    </section>
  );
};

export default Product;
