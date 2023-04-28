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
    <div className="lg:px-20 sm:my-20 ">
      <div className="flex justify-between items-center flex-wrap">
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
          className="w-80 bg-[#3494cc]"
        >
          <div className="xl:flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold py-10 text-white text-center">
              Why Us
            </h2>
            <p className="px-10 py-6 md:p-6 text-sm md:text-base text-white font-semibold">
              Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar.
            </p>
          </div>
        </motion.div>
        <Card
          title="Vision"
          des="Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia n`ostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. "
        />
        <Card
          title="Mission"
          des="Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. 
"
        />
        <Card
          title="Value"
          des="Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. "
        />
      </div>
    </div>
  );
}
