import React,{useState} from 'react'
import {images} from '../../assets'
import ProjectList from './components/ProjectList'
import pro from '../../assets/Illustration.svg'
import { motion } from "framer-motion";
import { animation } from "../../Animations/index";
import { useInView } from 'react-intersection-observer';

function Index() {
    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '100px',
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
            <h2 className='lg:h1 md:h2 sm:h3 h4'>Projects</h2>
        </motion.div>
        <div className='lg:flex items-center'>
            <motion.div 
            // variants={animation.aboutImage}
            ref={ref}
            animate={hasAnimated ? "visible" : "hidden"}
            transition={{
                delay: 0.02,
                type: "tween",
                duration: 1 ,
                }}

            className=''>
                <img src={pro} alt="" className='lg:w-[100rem]' />
            </motion.div>
            <div className='px-5 flex flex-col space-y-5 items-center justify-center'>
                <motion.div
                // variants={animation.text}
                ref={ref}
                animate={hasAnimated ? "visible" : "hidden"}
                transition={{
                    delay: 0.02,
                    type: "tween",
                    duration: 1 ,
                }}

                >
                    <p className='text-sm  md:text-base'> Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
                </motion.div>

                <div className='space-y-5 w-[80%] lg:w-[70%]'>
                    <motion.div
                    // variants={animation.aboutTextAnimation}
                    ref={ref}   
                    animate={hasAnimated ? "visible" : "hidden"}
                    transition={{
                        delay: 0.02,
                        type: "tween",
                        duration: 1 ,
                    }}
                    >
                        <ProjectList link='#' title='Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'/>
                    </motion.div>
                    <motion.div
                    variants={animation.aboutTextAnimation}
                    ref={ref}   
                    animate={hasAnimated ? "visible" : "hidden"}
                    transition={{
                        delay: 0.02,
                        type: "tween",
                        duration: 1 ,
                    }}
                    >
                        <ProjectList link='#' title='Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'/>
                    </motion.div>
                    <motion.div
                    // variants={animation.aboutTextAnimation}
                    ref={ref}   
                    animate={hasAnimated ? "visible" : "hidden"}
                    transition={{
                        delay: 0.02,
                        type: "tween",
                        duration: 1 ,
                    }}
                    >
                        <ProjectList link='#' title='Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'/>
                    </motion.div>
                </div>
                <motion.div 
                variants={animation.text}
                ref={ref}
                animate={hasAnimated ? "visible" : "hidden"}
                transition={{
                    delay: 0.02,
                    type: "tween",
                    duration: 1 ,
                }}
                className='btn bg-primary'>
                    See Others
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Index