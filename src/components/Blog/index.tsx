import React, { useState } from "react";
import Slider from "react-slick";
import BlogCard from "./components/BlogCard";
import { images } from "../../assets";
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
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1624,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-gray-100 dark:bg-secondary w-full">
      <motion.div
        variants={animation.text}
        ref={ref}
        animate={hasAnimated ? "visible" : "hidden"}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
        className="p-5 flex justify-center"
      >
        <h2 className="lg:h1 md:h2 sm:h3 h4">Recent Blog</h2>
      </motion.div>
      <div className="py-4 w-[90%] m-auto">
        <Slider {...settings} className="p-2">
          <div className="flex flex-col items-center justify-center">
            <BlogCard
              date="Apr 4 2023"
              des="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum "
              imgLink={images.blog1}
              title="When Start Your First Business"
            />
          </div>
          <div className="m-auto">
            <BlogCard
              date="Apr 4 2023"
              des="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum "
              imgLink={images.blog2}
              title="Thinking of Starting A Business ?"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
