import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div className="">
      <div className="overflow-hidden lg:clip">
        <Slider {...settings}>
          <div className="lg:h-screen pb-10 lg:pb-0 bg-secondary">
            <div className="flex flex-col h-[70%] items-center justify-center">
            <div className="container mx-auto text-center ">
              <h1 className="text-5xl text-white font-bold mb-6">
                Your Company Name
              </h1>
              <p className="text-2xl text-white mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="bg-primary text-gray-800 py-3 px-8 rounded-full font-bold text-xl shadow-md hover:shadow-lg transition duration-300">
                Learn More
              </button>
            </div>
            </div>
          </div>
          <div className="lg:h-screen pb-10 lg:pb-0 bg-secondary">
            <div className="flex flex-col h-[70%] items-center justify-center">
            <div className="container mx-auto text-center ">
              <h1 className="text-5xl text-white font-bold mb-6">
                Your Company Name
              </h1>
              <p className="text-2xl text-white mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="bg-primary text-gray-800 py-3 px-8 rounded-full font-bold text-xl shadow-md hover:shadow-lg transition duration-300">
                Learn More
              </button>
            </div>
            </div>
          </div>
          <div className="lg:h-screen pb-10 lg:pb-0 bg-secondary">
            <div className="flex flex-col h-[70%] items-center justify-center">
            <div className="container mx-auto text-center ">
              <h1 className="text-5xl text-white font-bold mb-6">
                Your Company Name
              </h1>
              <p className="text-2xl text-white mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="bg-primary text-gray-800 py-3 px-8 rounded-full font-bold text-xl shadow-md hover:shadow-lg transition duration-300">
                Learn More
              </button>
            </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
