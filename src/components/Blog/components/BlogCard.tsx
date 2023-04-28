import React, { useState } from "react";
import { motion } from "framer-motion";
import { animation } from "../../../Animations";
import { useInView } from "react-intersection-observer";

type props = {
  title: string;
  des: string;
  imgLink: string;
  date: string;
};

export default function BlogCard({ title, des, imgLink, date }: props) {
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
      animate={hasAnimated ? "visible" : "hidden"}
      transition={{
        delay: 0.02,
        type: "tween",
        duration: 0.8,
      }}
      className="card w-80 md:w-96 my-4 bg-base-100 shadow-xl"
    >
      <figure className="px-10 pt-10">
        <img src={imgLink} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title h4">{title}</h2>
        <p className="text-sm md:text-base line-clamp-4 ">{des}</p>
        <div className="flex items-center justify-between w-full ">
          <div className="text-sm text-gray-400">
            <p>published date</p>
            <p>{date}</p>
          </div>
          <div className=" text-white btn bg-primary hover:bg-secondary border-0">
            Read More
          </div>
        </div>
      </div>
    </motion.div>
  );
}
