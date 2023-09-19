import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div
      className={`${
        isVisible
          ? "fixed bottom-[40px] right-[40px] bg-primary p-[1rem] rounded-full flex justify-center items-center z-1 transition-transform duration-150 ease-in-out text-white"
          : "opacity-0 hidden"
      }`}
      onClick={scrollToTop}
    >
      <FaChevronUp />
    </div>
  );
};

export default ScrollToTop;
