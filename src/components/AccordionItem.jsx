import React from "react";
import { FaChevronUp , FaCheck } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
const AccordionItem = ({ section, activeSection, setActiveSection }) => {
  const isActive = activeSection === section.id;

  return (
    <div className="w-full bg-slate-50">
      <button
        onClick={() => setActiveSection(isActive ? null : section.id)}
        className={` w-full transition-all duration-500  px-4 md:h-[12vh] font-normal md:font-medium md:text-xl flex justify-between md:justify-center items-center   py-4 border border-gray-100   ${
          isActive ? "bg-black text-white rounded-lg md:translate-x-2  transition-all duration-500 " : "bg-white text-gray-400"
        }`}
      >
        {section.title} <div className="md:hidden">{isActive ?<FaChevronUp/> :<FaChevronDown/>}</div>
      </button>

      <div
        className={`overflow-hidden   flex flex-col gap-5  h-auto w-full md:hidden ${
          isActive ? " p-4 opacity-100" : "max-h-0 opacity-0"
        }`}
          >
              
              <img src={section.image} alt="" className="w-[55vw] rounded-md" />
              <p className=" text-lg font-medium">{section.heading}</p>
              <ul className=" space-y-2">
            {section.content.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-400">
              <FaCheck className="text-green-500 text-lg mt-2 shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
            ))}
          </ul>
      </div>
    </div>
  );
};

export default AccordionItem;
