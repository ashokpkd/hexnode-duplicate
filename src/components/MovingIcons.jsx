import React from "react";
import { IoLogoApple } from "react-icons/io";
import { IoLogoAndroid } from "react-icons/io";
import { IoLogoGoogle } from "react-icons/io";
import { IoLogoAngular } from "react-icons/io";
import { IoLogoDropbox } from "react-icons/io";
import { IoLogoPlaystation } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoBuffer } from "react-icons/io";
import { IoLogoDocker } from "react-icons/io5";
const icons = [<IoLogoApple size={50}/>,<IoLogoAndroid size={50}/>,<IoLogoGoogle size={50}/>,<IoLogoAngular size={50}/>,<IoLogoBuffer size={50}/>,<IoLogoDropbox size={50}/>,<IoLogoPlaystation size={50}/>,<IoLogoJavascript size={50}/>,<IoLogoDocker size={50}/>];
const MovingIcons = () => {
  return (
    <div className="w-full overflow-hidden py-10  bg-gray-100 flex">
    <div className="flex space-x-20 animate-scroll whitespace-nowrap">
      {icons.map((icon, index) => (
        <span key={index} className="text-4xl">{icon}</span>
      ))}
      {icons.map((icon, index) => (
        <span key={index + 8} className="text-4xl">{icon}</span> 
      ))}
              {icons.map((icon, index) => (
        <span key={index + 8} className="text-4xl">{icon}</span> 
      ))}
    </div>
  </div>
  );
};

export default MovingIcons;
