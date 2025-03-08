import React from "react";
import android from '../assets/android.svg'
import windows from '../assets/windows.svg'
import ios from '../assets/ios.svg'
import appleTv from '../assets/apple-tv.svg'
import androidTv from '../assets/android-tv.svg'
import amazonFire from '../assets/amazon-fire.webp'

const Platforms = () => {
  const images = [
    android,
    windows,
    ios,
    androidTv,
    appleTv,
    amazonFire,
  ];

  return (
      <div className=" flex flex-col items-center py-24 gap-8">
          <p className=" font-medium text-3xl md:text-5xl">Platforms supported</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-5 p-5 ">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-md transform transition duration-300 hover:-translate-y-2"
          />
        ))}
      </div>
    </div>
  );
};

export default Platforms;
