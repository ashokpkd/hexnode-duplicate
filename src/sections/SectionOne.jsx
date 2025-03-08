import React from "react";
import section1Img from "../assets/images/section1Img.png";
import DescriptionCard from "../components/DescriptionCard";
import idc from "../assets/images/idc.png";
import gartner from "../assets/images/gartner.png";
import forrester from "../assets/images/forrester.png";
const SectionOne = () => {
  return (
    <div className=" h-full  flex flex-col">
      <div className=" bg-[#070514] text-white flex max-lg:flex-col-reverse flex-1 pb-10 ">
        <div className="flex flex-col flex-1 items-center lg:items-start lg:px-10 gap-10 justify-center">
          <p className="font-bold text-4xl px-10 max-lg:text-center ">
            Turn your devices into kiosks in a few minutes with Hexnode UEM
          </p>
          <div className="flex max-sm:flex-col lg:px-10 gap-5">
            <input
              type="email"
              placeholder="Your Work Email"
              className=" rounded-md py-3 px-5 text-lg max-h-[15vh] text-gray-500"
            />
            <button className=" bg-rose-700 text-white flex items-center justify-center  px-5 py-3 hover:bg-rose-800 max-h-[15vh] text-md rounded-md ">
              GET STARTED NOW!
            </button>
          </div>
        </div>
        <div className="flex flex-1 p-3 md:px-10">
          <img src={section1Img} alt="" />
        </div>
      </div>
      <div className="flex max-sm:flex-col items-center justify-between  bg-[#262338] text-gray-400 px-5 py-5 w-full">
        <div>
          {" "}
          <DescriptionCard
            img={idc}
            sentence={
              "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024."
            }
          />
        </div>
        <div className=" md:border-r md:border-l border-gray-500 md:px-5 ">
          {" "}
          <DescriptionCard
            img={gartner}
            sentence={
              "Hexnode was recognized in the 2023 Gartner® Market Guide for Unified Endpoint Management Tools."
            }
          />
        </div>
        <div>
          {" "}
          <DescriptionCard
            img={forrester}
            sentence={
              "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
