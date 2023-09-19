import React, { useState } from "react";
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
    <div className="min-h-screen w-full flex flex-col lg:flex-row py-6 lg:px-[15rem]">
      <motion.div
        variants={animation.aboutImage}
        ref={ref}
        animate={hasAnimated ? "visible" : "hidden"}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
        className="w-full lg:w-1/2 flex flex-col justify-center space-y-20 px-20"
      >
        <div className="">
          <p className="text-gray-500 lg:text-xl">STAY IN TOUCH WITH US</p>
          <h2 className="lg:h1 md:h2 sm:h3 h4">Quick Contact</h2>
          <p className="md:text-2xl lg:text-4xl text-primary">
            Just to say hi !!
          </p>
          <p className="text-sm md:text-xl lg:text-2xl">
            If you have any questions simply use the following contact details.
          </p>
        </div>
        <div className="">
          <p className="text-lg md:text-xllg:text-2xl">
            Address:-{" "}
            <span className="text-primary">Addis Ababa, Ethiopia</span>{" "}
          </p>
          <p className="text-lg md:text-xllg:text-2xl">
            Email:- <span className="text-primary ">email@email.com</span>
          </p>
          <p className="text-lg md:text-xllg:text-2xl">
            Phone:- <span className="text-primary">+2519123456789</span>
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={animation.aboutTextAnimation}
        ref={ref}
        animate={hasAnimated ? "visible" : "hidden"}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
        className="w-full lg:w-1/2 flex flex-col justify-center p-10"
      >
        <form className="grid gap-4" action='https://formsubmit.co/cdc19326455c814f0363f175a1bd1f11' method='POST'>
          <input
            type="text"
            name="Name"
            placeholder="Name"
            required
            className="p-3 outline-none text-primary text-xl border-b-4 capitalize border-primary"
          />
          <input
            type="email"
            name="Email"
            placeholder="email"
            required
            className="p-3 outline-none text-primary text-xl capitalize border-b-4 border-primary"
          />
          <textarea
            placeholder="Message"
            name="Message"
            required
            className="capitalize border-b-4 border-primary resize-none h-60 p-3 outline-none text-primary text-xl"
          ></textarea>
          <button type="submit" className="bg-primary text-white p-3 hover:bg-secondary hover:shadow-lg active:scale-95 transition-transform ease-in-out duration-75 ">
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}
