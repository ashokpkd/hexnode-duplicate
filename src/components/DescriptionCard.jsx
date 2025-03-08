import React from "react";

const DescriptionCard = ({ img, sentence }) => {
  return (
    <div className="flex flex-col max-sm:border-b border-gray-500 items-center justify-center lg:max-w-[25vw] min-h-[25vh]  gap-5 py-10 transition-all duration-300 hover:-translate-y-2">
          <img src={img} alt="" className="max-w-[100px]  max-h-[10vh]" />
          <p className="text-sm  text-center ">{sentence}</p>
    </div>
  );
};

export default DescriptionCard;
