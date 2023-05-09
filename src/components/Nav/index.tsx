import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {
  name: string;
  path?: string;
};
const Navbar = ({name, path}:Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showTogel, setShowTogel] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav
      className={`${
        scrollPosition > 0 ? "fixed top-0 left-0 right-0 shadow-md" : ""
      } flex flex-wrap items-center justify-between p-6 bg-primary z-10`}
    >
      {/* Logo */}
      <div className="flex items-center mr-6">
        <a href="/" className="text-xl font-bold text-white">
          My Website
        </a>
      </div>
      
      {/* Navs */}
      <div>

        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 text-white border border-gray-600 rounded hover:text-white hover:border-white"
            onClick={toggleMenu}
          >
            {showMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={`${
            showMenu ? "" : "hidden"
          } w-full lg:block lg:flex-grow lg:w-auto`}
        >
          <div className="text-xl space-x-8 lg:flex-grow">
            <a
              href="/"
              className={`block mt-4 text-white lg:inline-block lg:mt-0 hover:text-white mr-4 ${name === "home" ? "border-b-2 border-white":""} `} 
            >
              Home
            </a>
            <a
              href="/about"
              className={`block mt-4 text-white lg:inline-block lg:mt-0 hover:text-white mr-4 ${name === "about" ? "border-b-2 border-white":""}`}
            >
              About
            </a>

            <a
              href="/projects"
              className={`block mt-4 text-white lg:inline-block lg:mt-0 hover:text-white mr-4 ${name === "projects" ? "border-b-2 border-white":""}`}
            >
              Projects
            </a>

            <a
              href="/blogs"
              className= {`block mt-4 text-white lg:inline-block lg:mt-0 hover:text-white mr-4 ${name === "blogs" ? "border-b-2 border-white":""}`}
            >
              Blogs
            </a>

            <div className="relative mt-4 lg:inline-block lg:mt-0">
              <button
                className={`text-white focus:outline-none ${name === "services" ? "border-b-2 border-white":""}`}
                onClick={()=>{setShowTogel(!showTogel)}}
              >
                Services
                <svg
                  className="inline-block w-2 h-2 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 16l6-6H4l6 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={`${
                  showTogel ? "" : "hidden"
                } absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-10`}
              >
                <a
                  href="/services/Consultancy"
                  className={`block px-4 py-2 text-white hover:bg-gray-900 ${name === "services" && path === "consulting" ? "border-b-2 border-white":""} capitalize` }
                >
                  Consultancy
                </a>
                <a
                  href="/services/Projectmanagment"
                  className={`block px-4 py-2 text-white hover:bg-gray-900 ${name === "services" && path === "project" ? "border-b-2 border-white":""} capitalize` }
                >
                  Project Management
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
