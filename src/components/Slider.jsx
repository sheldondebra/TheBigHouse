import React, { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { movies } from "../data/movies";

const Slider = () => {
  const slides = [
    {
      url:
        "https://cdn.pixabay.com/photo/2023/07/07/17/47/sushi-8113165_1280.jpg",
      title: "TBH Music Review",
      desc:
        "Accra Med, Fire and P.D, come together to create one big, happy Accra home"
    },
    {
      url:
        "https://cdn.pixabay.com/photo/2023/07/08/12/22/brush-jewel-beetle-8114428_1280.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=" h-[780px] w-full m-auto  relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url} )` }}
        className="w-full h-full duration-500 bg-center bg-cover "
      >
        <h1 className="text-5xl">
        
        </h1>
        <p />
        <button className="p-2 text-white rounded-full bg-cyan-600/60 hover:bg-cyan-300 ">
          Watch Latest Episodes
        </button>
      </div>
      {/* Left Arrow*/}
      <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer bg-black/20 hover:bg-cyan-500/20">
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>
      {/* Right Arrow*/}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-white cursor-pointer bg-black/20 hover:bg-cyan-500/20">
        <BsChevronCompactRight size={30} onClick={nextSlide} />
      </div>
      <div className="flex justify-center top-1">
        {slides.map((slide, slideIndex) =>
          <div className="text-2xl cursor-pointer ">
            <RxDotFilled />
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
