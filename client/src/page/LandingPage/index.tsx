import React from "react";
import Hero from "../../components/Hero";
import Nav from "../../components/Nav";
import About from "../../components/About";
import Why from "../../components/Why";
import Services from "../../components/Services";
import Projects from "../../components/Projects";
import Testimonials from "../../components/Testimonials";
import Counter from "../../components/Counter";
import Gallery from "../../components/Gallery";
import Blog from "../../components/Blog";
import Footer from "../../components/Footer";
import Contatct from "../../components/Contact";
import ScrollTop from "../../components/ScrollTop";
import { motion } from 'framer-motion';

export default function index() {
  return (
    <motion.div className="w-90% m-auto" initial="hidden" animate="show">
      <div>
        <Nav name="home" />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Why />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <Gallery />
      </div>
      {/* <div>
        <Blog />
      </div> */}
      <div>
        <Contatct />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <ScrollTop /> 
      </div>
    </motion.div>
  );
}
