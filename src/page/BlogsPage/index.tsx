import React from "react";
import Navbar from "../../components/Nav";
import { images } from "../../assets";
import { Link } from "react-router-dom";
import ScrollToTop from "../../components/ScrollTop";
import Footer from "../../components/Footer";
export default function index() {
  return (
    <div>
      <Navbar name="blogs" />
      <div className="container mx-auto px-4 my-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-8/12 px-4">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                  <img
                    alt="..."
                    src={images.blog1}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px",
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-white fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold ">
                      Top 5 Brilliant Content Marketing Strategies to Boost Your
                      Business Growth
                    </h4>
                    <p className="text-md font-light mt-2 ">
                      The ascent of portable applications has implied that we
                      currently convey a PC in our pockets wherever we go, and
                      this has changed the manner in which we approach content.
                      While content marketing was once about delivering content
                      for the web, it has now advanced to incorporate
                      applications, web-based media, and even streaming stages.
                    </p>
                  </blockquote>
                  <Link to={"/blogs/34"}>
                    <div className=" w-full text-white btn bg-primary hover:bg-secondary border-0">
                      Read More
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div>
        <ScrollToTop /> 
      </div>
    </div>
  );
}
