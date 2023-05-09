import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../../assets";
import hero from "../../assets/hero.svg"

const Hero = () => {
  return (
    <div className="h-screen py-4 px-6 lg:flex ">
      <div className="lg:flex lg:flex-row-reverse items-center justify-center bg-primary/5">
        <div className="lg:w-[50%]">
          <img src={hero} alt="" className="w-30"/>
        </div>
        <div className="flex flex-col items-center justify-center text-center lg:w-[50%]">
          <h1 className="text-5xl lg:text-7xl font-bold my-3">
          Unleash Your Potential with <span className="text-primary">HORN.</span>
          </h1>
          <p className="text-center lg:text-xl">
          Elevate Your Growth. Drive Impact. Partner with HIRCTF for expert research, consultancy, and training services. Unlock new possibilities and accelerate your success today.
          </p>
          <div className="bg-primary text-white px-5 py-3 font-bold my-3" >
            Read More
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
