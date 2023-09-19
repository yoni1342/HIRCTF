import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {
  name: string;
  path?: string;
};
const Navbar = ({ name, path }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showTogel, setShowTogel] = useState(false);
  const [aboutShowTogel, setAboutShowTogel] = useState(false);
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
          <div className="text-xl lg:space-x-8 lg:flex-grow">
            <Link to="/">
              <div
                className={`block mt-4 text-white lg:inline-block lg:mt-0 hover:text-white mr-4 ${
                  name === "home" ? "border-b-2 border-white" : ""
                } `}
              >
                Home
              </div>
            </Link>

            {/* About Nav */}
            <div className="relative mt-4 lg:inline-block lg:mt-0">
              <button
                className={`text-white focus:outline-none ${
                  name === "about" ? "border-b-2 border-white" : ""
                }`}
                onClick={() => {
                  setAboutShowTogel(!aboutShowTogel);
                }}
              >
                About
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
                  aboutShowTogel ? "" : "hidden"
                } absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-10`}
              >
                <Link to="/about/company">
                  <div
                    className={`block px-4 py-2 text-white hover:bg-gray-900 ${
                      name === "about" && path === "company"
                        ? "border-b-2 border-white"
                        : ""
                    } capitalize`}
                  >
                    Company
                  </div>
                </Link>
                <Link to="/about/clients">
                  <div
                    className={`block px-4 py-2 text-white hover:bg-gray-900 ${
                      name === "about" && path === "clinets"
                        ? "border-b-2 border-white"
                        : ""
                    } capitalize`}
                  >
                    Clients
                  </div>
                </Link>
                <Link to="/about/history">
                  <div
                    className={`block px-4 py-2 text-white hover:bg-gray-900 ${
                      name === "about" && path === "history"
                        ? "border-b-2 border-white"
                        : ""
                    } capitalize`}
                  >
                    History
                  </div>
                </Link>
              </div>
            </div>
            <Link to="/projects">
              <div
                className={`block mt-4 text-white lg:inline-block lg:mt-0 hover:text-white mr-4 ${
                  name === "projects" ? "border-b-2 border-white" : ""
                }`}
              >
                Projects
              </div>
            </Link>
            <Link to="/blogs">
              <div
                className={`block mt-4 text-white lg:inline-block lg:mt-0 hover:text-white mr-4 ${
                  name === "blogs" ? "border-b-2 border-white" : ""
                }`}
              >
                Blogs
              </div>
            </Link>

            <div className="relative mt-4 lg:inline-block lg:mt-0">
              <button
                className={`text-white focus:outline-none ${
                  name === "services" ? "border-b-2 border-white" : ""
                }`}
                onClick={() => {
                  setShowTogel(!showTogel);
                }}
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
                <Link to="/services/Consultancy">
                  <div
                    className={`block px-4 py-2 text-white hover:bg-gray-900 ${
                      name === "services" && path === "consulting"
                        ? "border-b-2 border-white"
                        : ""
                    } capitalize`}
                  >
                    Consultancy
                  </div>
                </Link>
                <Link to="/services/research">
                  <div
                    className={`block px-4 py-2 text-white hover:bg-gray-900 ${
                      name === "services" && path === "project"
                        ? "border-b-2 border-white"
                        : ""
                    } capitalize`}
                  >
                    Research
                  </div>
                </Link>
                <Link to="/services/training">
                  <div
                    className={`block px-4 py-2 text-white hover:bg-gray-900 ${
                      name === "services" && path === "project"
                        ? "border-b-2 border-white"
                        : ""
                    } capitalize`}
                  >
                    Training
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
