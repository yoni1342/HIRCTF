import React,{useState} from "react";
import about from "../../assets/OBJECTS.svg";
import { motion } from "framer-motion";
import { animation } from "../../Animations/index";
import { useInView } from 'react-intersection-observer';
import {images} from '../../assets'

export default function Index() {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '100px',
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div className="my-10">
      <div className="flex flex-col items-center  h-full ">
        <motion.div
          variants={animation.text}
          ref={ref}
          animate={hasAnimated ? "visible" : "hidden"}
          transition={{
            delay: 0.02,
            type: "tween",
            duration: 1 ,
          }}
        >
          <h1 className=" lg:h1 md:h2 sm:h3 h4">About Us</h1>
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-5 lg:space-y-0 lg:space-x-10">
          <motion.div
            variants={animation.aboutImage}
            ref={ref}
            animate={hasAnimated ? "visible" : "hidden"}
            transition={{
              delay: 0.2,
              type: "tween",
              duration: 1 ,
            }}
          >
            <img src={about} alt="" className="lg:w-[30rem]" />
          </motion.div>
          <motion.div
            variants={animation.aboutTextAnimation}
            ref={ref}
            animate={hasAnimated ? "visible" : "hidden"}
            transition={{
              delay: 0.02,
              type: "tween",
              duration: 1 ,
            }}
            // animate={con}
            className="lg:w-[40%] space-y-10 flex flex-col justify-center items-center lg:pr-10"
          >
            <p className="md:text-lg lg:text-xl px-3">
              HIRCTF is a value driven consultancy firm providing consultancy,
              research and training services to governmental,
              inter-governmental, non-governmental and private sector
              organizations.
            </p>
            <div className="bg-primary text-white text-2xl py-3 px-8 rounded-md hover:shadow-md cursor-pointer active:scale-90 transition-transform ease-in-out duration-100 items-end">
              Read More
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
