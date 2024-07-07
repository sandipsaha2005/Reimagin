import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../ui/CardScroll";
import { FaUsers } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { GrDeploy } from "react-icons/gr";

export function CanvasRevealEffectDemo() {
  const [number, setNumber] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const [intervalId, setIntervalId] = useState(null);

  const startCounting = (setNumberFunction, maxNumber, increment) => {
    const id = setInterval(() => {
      setNumberFunction(prevNumber => {
        const newNumber = prevNumber + increment;
        if (newNumber >= maxNumber) {
          clearInterval(id);
          return maxNumber;
        }
        return newNumber;
      });
    }, 100);
    setIntervalId(id);
  };

  const handleHover = (setNumberFunction, number, maxNumber, increment) => {
    if (!intervalId && number < maxNumber) {
      startCounting(setNumberFunction, maxNumber, increment);
    }
  };

  const handleMouseLeave = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  useEffect(() => {
    if (number >= 1000000) setNumber("1M+");
  }, [number]);

  useEffect(() => {
    if (number1 >= 40000000000) setNumber1("4B+");
  }, [number1]);

  useEffect(() => {
    if (number2 >= 40000000) setNumber2("40M+");
  }, [number2]);

  return (
    <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-gradient-to-b from-[#111] via-zinc-800 to-[#020617] w-full gap-3 mx-auto px-8">
      <Card
        title={`${number} Live Services`}
        onMouseEnter={() => handleHover(setNumber, number, 1000000, 50000)}
        onMouseLeave={handleMouseLeave}
        icon={<FaUsers className="text-8xl font-bold text-white mt-6"/>}
      >
        <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-purple-900" />
      </Card>
      <Card
        title={`${number1} Request Per Months`}
        onMouseEnter={() => handleHover(setNumber1, number1, 40000000000, 1000000000)}
        onMouseLeave={handleMouseLeave}
        icon={<FaCodePullRequest className="text-8xl font-bold text-white mt-10" />}
      >
        <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-red-800" />
        {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
      </Card>
      <Card
        title={`${number2} Deploys`}
        onMouseEnter={() => handleHover(setNumber2, number2, 40000000, 1000000)}
        onMouseLeave={handleMouseLeave}
        icon={<GrDeploy className="text-8xl font-bold text-white mt-6" />}
      >
        <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-blue-900 " />
      </Card>
    </div>
  );
}

const Card = ({ title, icon, onMouseEnter, onMouseLeave, children }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setHovered(true);
        onMouseEnter();
      }}
      onMouseLeave={() => {
        setHovered(false);
        onMouseLeave();
      }}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 h-[20rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-5xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
