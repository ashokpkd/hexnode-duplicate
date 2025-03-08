import React, { useState } from "react";
import AccordionItem from "../components/AccordionItem";
import { FaCheck } from "react-icons/fa6";
import mobile from "../assets/images/mobile.webp";
import tab from "../assets/images/tab.webp";
import web from "../assets/images/web.webp";
import flayer from "../assets/images/flayer.webp";
import bio from "../assets/images/bio.webp";

const SectionTwo = () => {
  const [activeSection, setActiveSection] = useState(1); // Default active section for md

  const sections = [
    {
      id: 1,
      title: "Single App Kiosk",
      heading: "Powerful Single-App Kiosk solutions for enhanced control",
      image: mobile,
      content: [
        "Provision the devices to run one specialized application, with limited functionalities.",
        "Customize the device settings to cater to a specific use-case each time.",
        "Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
        "Empower your administrators with full control over the kiosk devices.",
      ],
    },
    {
      id: 2,
      title: "Multi-App Kiosk",
      heading: "Elevate efficiency with Multi-App Kiosk",
      image: tab,
      content: [
        "Limit device access to approved apps, ensuring focus and productivity.",
        "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",
        "With Hexnodes peripheral settings admins can allow necessary device settings while retaining control.",
        "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.",
      ],
    },
    {
      id: 3,
      title: "Web-based Kiosk",
      heading: "Explore the new way to manage web apps and websites",
      image: web,
      content: [
        "Let users access essential and approved web apps, website and files only.",
        "Make the best use of website kiosk with Hexnodes advanced settings.",
        "Tailor your experience to match your unique use case.",
        "From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.",
      ],
    },
    {
      id: 4,
      title: "Digital Signages",
      heading: "Capture attention with Digital Signage Kiosks",
      image: flayer,
      content: [
        "Transform your devices into captivating digital signage kiosks that grab attention.",
        "Engage your audience with vibrant images and seamless video streaming.",
        "Customize media files with trimming, muting, and background music.",
        "Advertise and show off your brand aesthetics to attract customers in different ways.",
        "Take control with Hexnode to reestablish your brands presence.",
      ],
    },
    {
      id: 5,
      title: "ASAM Kiosk",
      heading: "Unlock the power of Autonomous Single App Mode (ASAM)",
      image: bio,
      content: [
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
        "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",
        "Create focused, efficient and secure digital environments to match your requirements.",
        "Configure ASAM effortlessly and elevate your user experience like never before.",
      ],
    },
  ];

  return (
    <div className="px-5 py-10 md:px-20 w-full">
      <p className=" font-bold text-2xl md:text-4xl lg:text-5xl text-center px-10 py-5 md:py-16">
        Specific kiosk modes for unique use cases
      </p>
      <div className="flex flex-col md:flex-row w-full ">
        {sections.map((section) => (
          <AccordionItem
            key={section.id}
            section={section}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        ))}
      </div>

      <div className="hidden md:flex justify-center  w-full rounded-lg bg-slate-50">
        <div className="border flex justify-between gap-10  w-full px-16 py-16">
          <div className="flex flex-col">
            <p className=" text-3xl font-medium">
              {sections.find((sec) => sec.id === activeSection)?.heading}
            </p>
            <ul className="mt-4 space-y-2">
  {sections.find((sec) => sec.id === activeSection)?.content.map((item, index) => (
    <li key={index} className="flex items-start gap-3 text-gray-400">
      <FaCheck className="text-green-500 mt-2 text-lg shrink-0" />
      <span className="leading-relaxed">{item}</span>
    </li>
  ))}
</ul>

          </div>

          <img
            src={sections.find((sec) => sec.id === activeSection)?.image}
            alt=""
            className="max-w-[40vw] rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
