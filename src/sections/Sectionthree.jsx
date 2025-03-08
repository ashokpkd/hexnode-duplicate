import React, { useState } from "react";
import sec3img1 from "../assets/images/sec3img1.webp";
import sec3img2 from "../assets/images/sec3img2.webp";
import sec3img3 from "../assets/images/sec3img3.webp";
import sec3img4 from "../assets/images/sec3img4.webp";
import sec3img5 from "../assets/images/sec3img5.webp";
import { FaAngleRight } from "react-icons/fa6";

const Sectionthree = () => {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    {
      id: 1,
      title: "Effortless kiosk deployment & management",
      image: sec3img1,
      content:
        "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
    },
    {
      id: 2,
      title: "Customized interface for brand visibility",
      image: sec3img2,
      content:
        "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
    },
    {
      id: 3,
      title: "What more can you do with Hexnode kiosk?",
      image: sec3img3,
      content:
        "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",
    },

    {
      id: 4,
      title: "Secure and update your app ecosystem",
      image: sec3img4,
      content:
        "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.",
    },
    {
      id: 5,
      title: "Provide an easy-to-use interface for end-users",
      image: sec3img5,
      content:
        "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.",
    },
  ];

  return (
    <div className="px-5 py-10 md:px-20 w-full">
      <p className="font-bold text-2xl md:text-4xl lg:text-5xl text-center px-10 py-5 md:py-16">
        What additional possibilities does the Kiosk mode offer?
      </p>

      <div className="hidden md:flex w-full gap-10">
        <div className="w-1/2 p-5 ">
          <img
            src={sections.find((s) => s.id === activeSection)?.image}
            alt="Active Section"
            className="w-full  rounded-lg"
          />
        </div>

        <div className="w-1/2">
          <div className="space-y-2">
            {sections.map((section) => (
              <div key={section.id} className="border-b py-5">
                <p
                  className={`cursor-pointer text-2xl font-semibold transition-all duration-300 "
                  }`}
                  onClick={() => setActiveSection(section.id)}
                >
                  {section.title}
                </p>

                {activeSection === section.id && (
                  <div className="mt-3 transition-all duration-300">
                    <p className="text-lg text-gray-500  ">{section.content}</p>
                            <div className=" flex gap-1 text-xl font-medium py-4 text-red-600 items-center cursor-pointer">
                                <p>TRY FOR FREE</p>
                                <FaAngleRight size={15}/>

                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col w-full py-5">
        {sections.map((section) => (
          <div key={section.id} className="border-b">
            {activeSection !== section.id && (
              <button
                onClick={() => setActiveSection(section.id)}
                className="w-full text-left px-4 py-3 font-medium text-2xl "
              >
                {section.title}
              </button>
            )}

            {activeSection === section.id && (
              <div className="p-4 bg-white flex flex-col items-center">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-[60vw]  rounded-md mb-5"
                />
                <div>
                  <p className="font-semibold text-2xl">{section.title}</p>
                  <p className="mt-2 text-xl text-gray-600">
                    {section.content}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sectionthree;
