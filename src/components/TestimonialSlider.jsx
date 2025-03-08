import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import person1 from '../assets/images/person1.webp'
import person2 from '../assets/images/person2.webp'
import person3 from '../assets/images/person3.webp'
const testimonials = [
    {
      id: 1,
      name: "Dalibor Kruljac",
      company: "KAMELEYA LTD",
      quote:
        "Most complete MDM solution I found, and I tested many of them, including major names",
      image: person1
    },
    {
      id: 2,
      name: "Jane Doe",
      company: "Tech Solutions",
      quote: "This service has revolutionized our workflow. Highly recommended!",
      image: person2
    },
    {
      id: 3,
      name: "John Smith",
      company: "Innovate Inc.",
      quote: "A game changer for our business. Smooth and reliable.",
      image: person3
    },
  ];
const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  return (
    <div className="w-full flex flex-col items-center py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Why should you choose us?
      </h2>

      <div className="relative w-[80vw] md:max-w-[65vw]  bg-white shadow-lg rounded-2xl ">
        {/* Testimonial Card */}
        <div className="flex flex-col md:flex-row  items-center">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className=" w-full md:w-72  rounded-2xl object-cover "
          />
          <div className="md:ml-6 py-5 px-10 text-center md:text-left">
            <p className="text-lg py-5 font-semibold">"{testimonials[current].quote}"</p>
            <hr />
            <p className="mt-5 font-bold">{testimonials[current].name}</p>
            <p className="text-sm text-gray-500">{testimonials[current].company}</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex max-md:hidden  md:justify-between mt-4">
          <button
            onClick={prevSlide}
            className="p-5 bg-white rounded-lg transition md:absolute md:left-[-80px] md:top-1/2 md:-translate-y-1/2"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="p-5 bg-white rounded-lg transition md:absolute md:right-[-80px] md:top-1/2 md:-translate-y-1/2"
          >
            <FaChevronRight className="text-gray-700" />
          </button>
        </div>
      </div>
      <div className="flex md:hidden gap-5 justify-center  mt-4">
      <button
            onClick={prevSlide}
            className="p-5 bg-white rounded-lg transition md:absolute md:left-[-50px] md:top-1/2 md:-translate-y-1/2"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="p-5 bg-white rounded-lg transition md:absolute md:right-[-50px] md:top-1/2 md:-translate-y-1/2"
          >
            <FaChevronRight className="text-gray-700" />
          </button>
        </div>
    </div>
  );
}

export default TestimonialSlider