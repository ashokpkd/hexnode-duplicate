import React, { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import logoWhite from "../assets/images/logoWhite.png";
import logoBlack from "../assets/images/logoBlack.jpeg";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 700) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }

      if (scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 z-20 w-full transition-all duration-300 navbar flex justify-between items-center px-20 max-md:px-5 ${
          scrolled ? "pb-2 bg-white shadow-lg" : "bg-[#070514]"
        } h-[12vh] ${hideNavbar ? "max-md:hidden" : ""}`}
      >
        <div className="nav-left">
          <div className="nav-logo min-w-40 max-w-44">
            <img
              src={scrolled ? logoWhite : logoBlack}
              alt="logo"
              className=" max-sm:h-[10vh]"
            />
          </div>
        </div>

        <div className="nav-right flex gap-3 cursor-pointer py-3">
          <button className="bg-red-700 text-white hover:bg-red-800 px-5 py-3 rounded-md font-medium max-md:hidden">
            14 DAY FREE TRIAL
          </button>
          {hamburgerOpen ? (
            <IoClose
              size={28}
              className={`${scrolled ? "text-black" : "text-white"} md:hidden`}
              onClick={toggleHamburger}
            />
          ) : (
            <IoMenu
              size={28}
              className={`${scrolled ? "text-black" : "text-white"} md:hidden`}
              onClick={toggleHamburger}
            />
          )}
        </div>
      </div>

      {hideNavbar && (
        <div
          className={`fixed top-0 left-0 z-20 w-full bg-white py-2 md:hidden flex justify-end pr-5 transition-all duration-300 ${
            hideNavbar ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <button className="bg-red-700 text-white hover:bg-red-800 px-5 py-2 rounded-md font-medium">
            14 DAY FREE TRIAL
          </button>
        </div>
      )}

      <div className="nav2 w-[100%] md:hidden pb-5">
        <div className="px-3">{hamburgerOpen ? <Hamburger /> : null}</div>
      </div>
    </>
  );
};

export default Navbar;
