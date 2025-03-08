import React from "react";

const Hamburger = () => {
  return (
    <div className=" flex border-t  justify-center min-h-screen mt-16 ">
      <div className="flex flex-col mt-[8vh] items-center gap-5">
        <button className=" bg-red-700 text-white gont px-10 py-3 rounded-md font-medium">
          14 DAY FREE TRIAL
        </button>
        <p className=" font-medium text-lg">Login</p>
      </div>
    </div>
  );
};

export default Hamburger;
