import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero from "../../assets/hero.svg";
import { motion } from "framer-motion";
import { animation } from "../../Animations/index";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "100px",
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div className="h-screen py-4 px-6 lg:flex">
      <div className="lg:flex lg:flex-row-reverse items-center justify-center  w-full">
        <motion.div
          variants={animation.aboutTextAnimation}
          ref={ref}
          animate={hasAnimated ? "visible" : "hidden"}
          transition={{
            delay: 0.02,
            type: "tween",
            duration: 1,
          }}
          className="lg:w-[50%]"
        >
          <img src={hero} alt="" className="w-30" />
        </motion.div>
        <motion.div
          variants={animation.aboutImage}
          ref={ref}
          animate={hasAnimated ? "visible" : "hidden"}
          transition={{
            delay: 0.02,
            type: "tween",
            duration: 1,
          }}
          className="flex flex-col  justify-center text-center lg:w-[45%]"
        >
          <h1 className="text-5xl lg:text-7xl text-left font-bold my-3">
            Unleash Your Potential with{" "}
            <span className="text-primary">HORN.</span>
          </h1>
          <p className="text-left lg:text-xl">
            Elevate Your Growth. Drive Impact. Partner with HORN for expert
            research, consultancy, and training services. Unlock new
            possibilities and accelerate your success today.
          </p>
          <Link to={"/about"}>
            <div className="w-40 bg-primary text-white px-5 py-3 font-bold my-3 cursor-pointer shadow-md hover:shadow-lg active:scale-95 transition-transform ease-in-out duration-100">
              Read More
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
