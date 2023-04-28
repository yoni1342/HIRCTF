import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {animation} from '../../Animations'

export default function Index(props: { title: string; des: string }) {
  const { title, des } = props;
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: "-100px 0px",
  });

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
      className=" w-[23rem] xl:w-[20rem] bg-base-100 shadow-xl mb-10 px-10 lg:p-2"
    >
      <div className="card-body items-center">
        <h2 className="lg:h3 md:h4 text-lg font-bold text-primary ">{title}</h2>
        <p className="text-sm md:text-base">{des} </p>
      </div>
    </motion.div>
  );
}
