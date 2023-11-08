import React, { useState } from "react";
import ProjectList from "./components/ProjectList";
import pro from "../../assets/Illustration.svg";
import { motion } from "framer-motion";
import { animation } from "../../Animations/index";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

function Index() {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "100px",
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }
  return (
    <div className="my-20 lg:my-10 flex flex-col justify-center items-center">
      <motion.div
        variants={animation.text}
        ref={ref}
        animate={hasAnimated ? "visible" : "hidden"}
      >
        <h2 className="lg:h1 md:h2 sm:h3 h4">Projects</h2>
      </motion.div>
      <div className="lg:flex items-center">
        <motion.div
          // variants={animation.aboutImage}
          ref={ref}
          animate={hasAnimated ? "visible" : "hidden"}
          transition={{
            delay: 0.02,
            type: "tween",
            duration: 1,
          }}
          className=""
        >
          <img src={pro} alt="" className="lg:w-[3000px]" />
        </motion.div>
        <div className="px-5 flex flex-col space-y-5 items-center justify-center">
          <motion.div
            // variants={animation.text}
            ref={ref}
            animate={hasAnimated ? "visible" : "hidden"}
            transition={{
              delay: 0.02,
              type: "tween",
              duration: 1,
            }}
          >
            <p className="text-sm  md:text-base">
              {" "}
              Step into the world of tangible impact. In our projects section,
              you'll discover a tapestry of endeavors, each a testament to our
              commitment to excellence and positive change. From economic
              development initiatives to health programs, we bring our expertise
              to life, shaping the future of nations. Explore the stories of
              transformation, innovation, and progress that define our work and
              inspire us to keep reaching for new horizons.
            </p>
          </motion.div>

          <div className="space-y-5 w-[80%] lg:w-[70%]">
            <motion.div
              variants={animation.aboutTextAnimation}
              ref={ref}
              animate={hasAnimated ? "visible" : "hidden"}
              transition={{
                delay: 0.02,
                type: "tween",
                duration: 1,
              }}
            >
              <ProjectList
                link="#"
                title="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
              />
            </motion.div>
            <motion.div
              variants={animation.aboutTextAnimation}
              ref={ref}
              animate={hasAnimated ? "visible" : "hidden"}
              transition={{
                delay: 0.02,
                type: "tween",
                duration: 1,
              }}
            >
              <ProjectList
                link="#"
                title="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
              />
            </motion.div>
            <motion.div
              variants={animation.aboutTextAnimation}
              ref={ref}
              animate={hasAnimated ? "visible" : "hidden"}
              transition={{
                delay: 0.02,
                type: "tween",
                duration: 1,
              }}
            >
              <ProjectList
                link="#"
                title="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
              />
            </motion.div>
          </div>

          <Link to="/projects">
            <motion.div
              variants={animation.text}
              ref={ref}
              animate={hasAnimated ? "visible" : "hidden"}
              transition={{
                delay: 0.02,
                type: "tween",
                duration: 1,
              }}
              className="btn bg-primary hover:bg-primary hover:border-primary border-primary transition-transform ease-in-out duration-150"
            >
              See Others
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
