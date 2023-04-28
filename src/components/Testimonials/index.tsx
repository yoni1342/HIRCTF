import React, { useState } from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import { images } from "../../assets";
import { motion } from "framer-motion";
import { animation } from "../../Animations/index";
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
    <div className="my-10 flex flex-col justify-center">
      <motion.div
        variants={animation.text}
        ref={ref}
        animate={hasAnimated ? "visible" : "hidden"}
        transition={{
          delay: 0.02,
          duration: 1,
        }}
      >
        <h1 className="lg:h1 md:h2 sm:h3 h4 text-center mb-10">Testimonials</h1>
      </motion.div>
      <div className="w-[90%] m-auto">
        <Slider {...settings} className="">
          <TestimonialCard
            imgLink={images.test1}
            name="Dr. Abraham"
            des="Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus"
            social={{ facebook: "#", telegram: "#", linkedin: "#" }}
          />
          <TestimonialCard
            imgLink={images.test2}
            name="Dr. Abel Abebe"
            des="Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus"
            social={{ twitter: "#", linkedin: "#" }}
          />
          <TestimonialCard
            imgLink={images.test2}
            name="Dr. Abel Abebe"
            des="Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus"
            social={{ twitter: "#", linkedin: "#" }}
          />
          <TestimonialCard
            imgLink={images.test2}
            name="Dr. Abel Abebe"
            des="Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus"
            social={{ twitter: "#", linkedin: "#" }}
          />
          <TestimonialCard
            imgLink={images.test2}
            name="Dr. Abel Abebe"
            des="Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus"
            social={{ twitter: "#", linkedin: "#" }}
          />
          <TestimonialCard
            imgLink={images.test2}
            name="Dr. Abel Abebe"
            des="Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus"
            social={{ twitter: "#", linkedin: "#" }}
          />
          <TestimonialCard
            imgLink={images.test2}
            name="Dr. Abel Abebe"
            des="Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus"
            social={{ twitter: "#", linkedin: "#" }}
          />
        </Slider>
      </div>
    </div>
  );
}
