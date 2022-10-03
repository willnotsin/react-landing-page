import React from "react";
//import data
import { hero } from "../data";
//import icons
import { HiOutlineChevronDown } from "react-icons/hi";
const Hero = () => {
  const { title, subtitle, btnText, compText, image } = hero;
  return (
    <section className="min-h-[900px] py-12">
      <div className="container mx-auto min-h-[900px] flex justify-center items-center">
        <div className="flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left">
          {/* Text- title and subtitle */}
          <div className="flex-1" data-aos="fade-left" data-aos-delay="500">
            <h1 className="title mb-2 lg:mb-5">{title}</h1>
            <p className="lead mb-5 lg:mb-10">{subtitle}</p>
            {/* Button and comp text */}
            <div className="flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-6">
              <button className="btn btn-md lg:btn-lg btn-accent flex justify-center items-center lg:gap-x-4">
                {btnText}
                <HiOutlineChevronDown />
              </button>
              <span className="text-light lg:lead lg:mb-0">{compText}</span>
            </div>
          </div>
          {/* Image */}
          <div className="flex-1" data-aos="fade-right" data-aos-delay="500">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
