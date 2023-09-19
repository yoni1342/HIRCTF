import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animation } from "../../Animations";

export default function Index(props: { title: string; des: string; id?:string }) {
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
    <motion.label
      variants={animation.card}
      ref={ref}
      initial="hidden"
      animate={hasAnimated ? "show" : "hidden"}
      transition={{
        delay: 0.02,
        type: "tween",
        duration: 0.8,
      }}
      htmlFor={`my-modal-3`+props.id}
      className=" w-[23rem] xl:w-[20rem] bg-base-100 shadow-xl mb-10 px-10 lg:p-2 cursor-pointer hover:shadow-lg"
    >
      <div className="card-body items-center">
        <h2 className="lg:h3 md:h4 text-lg font-bold text-primary ">{title}</h2>
        <p className="text-sm md:text-base">{des} </p>
      </div>

      <input type="checkbox" id={`my-modal-3`+props.id}
 className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={`my-modal-3`+props.id}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            More info about {title}
          </h3>
          <p className="py-4">
            {des}
          </p>
        </div>
      </div>
    </motion.label>
  );
}
