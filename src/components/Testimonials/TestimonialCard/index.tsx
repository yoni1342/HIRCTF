import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";
import { animation } from "../../../Animations";
import { useInView } from "react-intersection-observer";

type props = {
  name: string;
  des: string;
  imgLink: string;
  social: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    telegram?: string;
  };
};

export default function Index({ name, imgLink, des, social }: props) {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "100px",
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }
  return (
    <motion.div 
        variants={animation.card}
        ref={ref}
        initial="hidden"
        animate={hasAnimated ? "show" : "hidden"}
        transition={{
            delay: 0.02,
            type: "tween",
            duration: 0.8 ,
            }}
    className="bg-[#F0F0F0] dark:bg-secondary flex flex-col justify-center items-center w-[90%] py-3 px-5 rounded-lg">
      <img
        src={imgLink}
        alt=""
        className="w-20 h-20 object-cover rounded-full"
      />
      <div className="h2 md:h1"> " </div>
      <p className="text-sm md:text-base">
        {des} <span>"</span>
      </p>
      <div className="flex flex-col items-center justify-center">
        <p className="h4 font-normal">{name}</p>
        <div className="flex items-center space-x-4">
          {social.linkedin && (
            <a href={social.linkedin}>
              <FaLinkedin className="text-primary cursor-pointer hover:text-secondary" />
            </a>
          )}
          {social.twitter && (
            <a href={social.twitter}>
              <FaTwitter className="text-primary cursor-pointer hover:text-secondary" />{" "}
            </a>
          )}
          {social.facebook && (
            <a href={social.facebook}>
              <FaFacebook className="text-primary cursor-pointer hover:text-secondary" />{" "}
            </a>
          )}
          {social.telegram && (
            <a href={social.telegram}>
              <FaTelegram className="text-primary cursor-pointer hover:text-secondary" />{" "}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
