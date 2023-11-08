import React, { useEffect, useState } from "react";
import { images } from "../../../../assets";
import { motion } from "framer-motion";
import { animation } from "../../../../Animations/index";
import { useInView } from "react-intersection-observer";

export default function Introduction() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "100px",
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Set the breakpoint value according to your Tailwind CSS configuration
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="my-4 min-h-screen">
      <div className="flex flex-col  items-center">
        <h2 className="lg:h2 sm:h3 h4 px-3">About Us</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:px-10 p-3 ">
          <motion.div
            variants={animation.aboutImage}
            ref={ref}
            animate={hasAnimated ? "visible" : "hidden"}
            transition={{
              delay: 0.2,
              type: "tween",
              duration: 1,
            }}
            className=""
          >
            <img src={images.intro} alt="" className="" />
          </motion.div>

          <motion.div
            variants={animation.aboutTextAnimation}
            ref={ref}
            animate={hasAnimated ? "visible" : "hidden"}
            transition={{
              delay: 0.02,
              type: "tween",
              duration: 1,
            }}
            className="py-3 px-4 space-y-5 lg:px-20 lg:w-[70%] leading-10 lg:text-lg"
          >
            HORN INTERNATIONAL RESEARCH, CONSULTANCY AND TRAINING FIRM,
            hereafter called as “HORN” is licensed and ESTABLISHED on 17
            February 2022 in Addis Ababa, Ethiopia to provide Research,
            Consultancy and Short-Term Training services to governmental,
            inter-governmental, non-governmental and private sector
            organizations, here after called “Clients” everywhere in the world.
            HORN has expertise in Economics, Entrepreneurship, Financial
            education and management, Feasibility study, Health, Health
            Economics, Project Design and Management, and Social Welfare/social
            protection, among others.
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="lg:h1 md:h2 sm:h3 h4 px-3">What we offer?</h2>
        <div className="flex items-center justify-center flex-col lg:flex-row">
          {/* image */}
          <div className="lg:w-[25%] p-4">
            {isLargeScreen ? (
              <img src={images.offer} alt="" />
            ) : (
              <img src={images.offermobil} alt="" />
            )}
          </div>
          {/* content */}
          <div className="py-3  px-4 space-y-5 lg:px-20 lg:w-[50%] lg:text-lg">
            <p className="leading-10  ">
              HORN offers consultancy, research and training services to
              organizations working in various sectors, including agriculture
              and livelihood; public health; education and training; food
              security and nutrition; humanitarian relief; manufacturing; SME
              and private sector development; labour markets, employment and
              migration; gender and women empowerment; water, sanitation and
              hygiene (WASH); community and rural development; urban development
              and governance; local economic development; financial sectors and
              others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
