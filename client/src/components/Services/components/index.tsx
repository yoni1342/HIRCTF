import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {animation} from '../../../Animations'
import { Link } from "react-router-dom";

type ServiceProps = {
  title: string;
  des: string;
  imgLink: string;
  link: string
};

function Index({ title, des, imgLink,link }: ServiceProps) {
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
      initial="hidden"
      ref={ref}
      animate={hasAnimated ? "show" : "hidden"}
      transition={{
        delay: 0.02,
        type: "just",
        duration: 0.8 ,
      }}
      className="mb-10  w-80  shadow-lg"
    >
      <img src={imgLink} alt="Shoes" />

      <div className="card-body">
        <h2 className="lg:h3 md:h4 text-lg font-bold text-primary">{title}</h2>
        <p className="text-sm md:text-base">{des}</p>
        <div className="card-actions justify-end">
          <Link to={link}>
          <div className="btn hover:bg-primary shadow-md hover:shadow-lg active:scale-95 hover:border-primary bg-primary border-primary text-white">
            READ MORE
          </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Index;
