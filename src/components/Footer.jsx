import React from "react";
import Platforms from "./Platforms";
import { FaAngleRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="px-10 md:px-36">
        <Platforms />
      </div>
      <div className=" flex flex-col bg-[#070514] text-white w-full items-center gap-5 md:gap-10 py-10">
        <p className=" px-10 text-center font-medium text-3xl md:text-4xl">
          Sign up and try Hexnode free for 14 days!
        </p>
        <div className="flex max-sm:flex-col  lg:px-10 gap-5">
          <input
            type="email"
            placeholder="Your Work Email"
            className=" rounded-md py-3 px-5 text-lg max-h-[15vh] text-gray-500"
          />
          <button className=" bg-rose-700 text-white flex items-center justify-center  px-5 py-3 hover:bg-rose-800 max-h-[15vh] text-md rounded-md ">
            GET STARTED NOW
          </button>
        </div>
        <div className=" flex gap-1 text-lg px-10 text-center  py-4 text-red-600 items-center cursor-pointer">
          <p>
            <span className=" text-gray-400">No credit cards required. </span>
            Request a demo
          </p>
          <FaAngleRight size={15} className="max-sm:hidden" />
        </div>
      </div>
      <div className="flex max-sm:flex-col sm:justify-between w-full sm:px-20 text-xs md:text-md items-center text-gray-500 py-16 sm:py-8 gap-5 ">
        <p>Get Started-Terms of Use-Privacy-Cookies</p>
        <p>Copyright © 2024 Mitsogo Inc. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
