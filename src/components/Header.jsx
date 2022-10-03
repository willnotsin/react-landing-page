import React, { useState, useEffect } from "react";
//Import data
import { header } from "../data";

//Import icons
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";

//Import components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  //mobile nave state
  const [mobileNav, setMobileNav] = useState(false);
  //header state
  const [isActive, setIsActive] = useState(false);
  //destructure header data
  const { logo, btnText } = header;
  //scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);
  return (
    <header
      className={`${
        isActive ? "lg:top-0 bg-white shadow-2xl" : "lg:top-[40px]"
      } py-6 lg:py-4 fixed w-full transition-all z-10`}
    >
      <div className="container mx-auto flex justify-between items-center ">
        {/* logo */}
        <button href="#" data-aos='fade-down' data-aos-delay='1000'>
          <img src={logo} alt="" />
        </button>
        {/* nav -initially hidden -show on desktop size*/}
        <div className="hidden lg:flex" data-aos='fade-down' data-aos-delay='1200'>
          <Nav/>
        </div>
        {/* cta button - intially hidden -shown on desktop size */}
        <button className="btn btn-sm btn-outline hidden lg:flex" data-aos='fade-down' data-aos-delay='1400'>
          {btnText}
        </button>
        {/* mobile nav trigger btn - hidden on desktop*/}
        <button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (<HiOutlineX className="text=3xl text-accent"/>) : (<HiMenuAlt1 className="text=3xl text-accent"/>)}
        </button>
        {/* mobile nav - hidden on desktop */}
        <div className={`${
          mobileNav ? 'left-0' : '-left-full'
        } fixed top-0 bottom-0 w-[50vw] lg:hidden transition-all`}>
          <MobileNav/>
        </div>
      </div>

    </header>
  );
};

export default Header;
