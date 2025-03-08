import React from "react";
import Navbar from "../components/Navbar";
import SectionOne from "../sections/SectionOne";
import SectionTwo from "../sections/SectionTwo";
import Sectionthree from "../sections/sectionthree";
import SectionFour from "../sections/SectionFour";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <Sectionthree />
      <SectionFour />
      <Footer/>
    </>
  );
};

export default Homepage;
