import React, { useState } from "react";
import Card from "../Card";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { animation } from "../../Animations";

export default function Index() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: "-100px 0px",
  });
  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }
  return (
    <div className="lg:px-20 sm:my-20">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        <motion.div
          variants={animation.card}
          ref={ref}
          initial="hidden"
          animate={hasAnimated ? "show" : "hidden"}
          transition={{
            delay: 0.02,
            type: "tween",
            duration: 0.8,
          }}
          className="w-80 bg-[#3494cc] "
        >
          <div className="xl:flex flex-col justify-center items-center n">
            <h2 className="text-4xl font-bold py-10 text-white text-center">
              Why Us
            </h2>
            <p className="px-10 py-6 md:p-6 text-sm md:text-base text-white font-semibold">
              HORN offers global expertise with a local touch. Our passionate
              team excels in research, consultancy, and training, committed to
              excellence. Join us to empower Africa's growth.
            </p>
          </div>
        </motion.div>
        <Card
          title="Vision"
          des="At HORN International Research, Consultancy, and Training Firm, our vision is clear: To be a catalyst for positive change and progress, contributing to the transformation and growth of nations. We aspire to be at the forefront of innovation and excellence in our fields, empowering individuals, organizations, and governments with knowledge and insights that drive sustainable development. Our vision extends beyond mere consultancy; it's about shaping a brighter future for Africa and the world. We are committed to building bridges between cultures and knowledge, fostering global collaborations, and leaving a lasting legacy of prosperity, knowledge, and ethical values."
          id="1"
        />
        <Card
          title="Mission"
          des="At HORN International Research, Consultancy, and Training Firm, our mission is to provide unparalleled research, consultancy, and training services that empower individuals, organizations, and governments to make informed decisions and drive positive change. We are dedicated to delivering excellence, upholding ethical values, and staying at the forefront of industry advancements. Our commitment extends to contributing to the growth and prosperity of Africa and beyond, fostering economic integration, and leaving a lasting legacy of knowledge and progress.          "
          id="2"
        />
        <Card
          title="Value"
          des="At HORN, our core values drive our mission. We uphold excellence, ethical conduct, and innovation as we deliver top-quality services with a global perspective. Teamwork, knowledge sharing, and a commitment to sustainability are at the heart of our approach. We prioritize our clients, engage with communities, and embrace a client-centric and socially responsible ethos in all that we do."
          id="3"
        />
      </div>
    </div>
  );
}
