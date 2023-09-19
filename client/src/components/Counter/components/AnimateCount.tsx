import React from "react";
import { useSpring, animated } from "react-spring";

type AnimatedNumberProps = {
  number: number;
  title: string;
};

export default function AnimateCount({ number, title }: AnimatedNumberProps) {
  const { value } = useSpring({
    from: { value: 0 },
    to: { value: number },
    delay: 200,
    
  });

  const animatedValue = value.interpolate((value: number) => Math.floor(value));

  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="bg-primary rounded-full w-10 h-10 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 text-center flex flex-col justify-center items-center">
        <animated.span className="text-xl md:text-4xl lg:text-5xl text-white font-bold">
          {animatedValue}
        </animated.span>
      </div>

      <div className="h7 sm:h-5 md:h4 lg:h3">
        {title}
      </div>
    </div>
  );
}
