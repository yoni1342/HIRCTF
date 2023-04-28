import React,{useState} from "react";
import ServiceCard from "./components";
import Slider from "react-slick";
import {images} from "../../assets/index"
import { motion } from "framer-motion";
import { animation } from "../../Animations/index";
import { useInView } from 'react-intersection-observer';

export default function Index() {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '100px',
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  
  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex flex-col justify-center min-h-screen mb-10">
      <motion.div 
      variants={animation.text}
      ref={ref}
      animate={hasAnimated ? "visible" : "hidden"}
      transition={{
        delay: 0.2,
        type: "tween",
        duration: 1 ,
      }}

      className="flex flex-col items-center justify-center">
        <h2 className="lg:h1 md:h2 h3">Services</h2>
        <p className="lg:w-[80%] p-5 text-sm md:text-base">Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.</p>
      </motion.div>
      <div className="mb-40 md:mb-0 w-[90%] m-auto">
        <Slider {...settings} className="space-x-4 ">
          <ServiceCard imgLink={images.consultancy_service} title="Consultancy" des="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis." key="co"/>
          <ServiceCard imgLink={images.research_service} title="Research" des="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis." key="co"/>
          <ServiceCard imgLink={images.training_service} title="Training" des="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis." key="co"/>
        </Slider>
      </div>
    </div>
  );
}
