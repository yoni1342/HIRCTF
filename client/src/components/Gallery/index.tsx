import React, { useState } from "react";
import { images } from '../../assets'
import { motion } from "framer-motion";
import { animation } from "../../Animations";
import { useInView } from "react-intersection-observer";

export default function Index() {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "100px",
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }
  return (
    <div className=" mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <motion.div 
      variants={animation.image}
      ref={ref}
      animate={hasAnimated ? "visible" : "hidden"}
      transition={{
        delay: 0.02,
        type: "tween",
        duration: 0.8 ,
      }}
      className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={images.gallery1}/>
      </motion.div>
      <motion.div 
      variants={animation.image}
      ref={ref}
      animate={hasAnimated ? "visible" : "hidden"}
      transition={{
        delay: 0.02,
        type: "tween",
        duration: 0.8 ,
      }}
      className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={images.gallery2} />
      </motion.div>
      <motion.div 
      variants={animation.image}
      ref={ref}
      animate={hasAnimated ? "visible" : "hidden"}
      transition={{
        delay: 0.02,
        type: "tween",
        duration: 0.8 ,
      }}
      className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={images.gallery3} />
      </motion.div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <motion.div 
      variants={animation.image}
      ref={ref}
      animate={hasAnimated ? "visible" : "hidden"}
      transition={{
        delay: 0.02,
        type: "tween",
        duration: 0.8 ,
      }}
      className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={images.gallery4} />
      </motion.div>
      <motion.div 
      variants={animation.image}
      ref={ref}
      animate={hasAnimated ? "visible" : "hidden"}
      transition={{
        delay: 0.03,
        type: "tween",
        duration: 0.8 ,
      }}
      className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={images.test1} />
      </motion.div>
      <motion.div 
      variants={animation.image}
      ref={ref}
      animate={hasAnimated ? "visible" : "hidden"}
      transition={{
        delay: 0.02,
        type: "tween",
        duration: 0.8 ,
      }}
      className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={images.consultancy_service} />
      </motion.div>
    </div>
  </div>
</div>
  )
}
