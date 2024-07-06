"use client";
import React, { useState,useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../ui/CardScroll";
import { FaUsers } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { GrDeploy } from "react-icons/gr";
import  NumberTickerDemo from './countNumberComp'
export function CanvasRevealEffectDemo() {
  const [number, setNumber] = useState(0);
  const [number1, setNumber1]=useState(0)
  const [number2, setNumber2]=useState(0)

  const [intervalId, setIntervalId] = useState(null); // State to hold interval ID

  const forFirst = () => {
    if (number >= 10) return;
    console.log("hi");
    const id = setInterval(() => {
      setNumber(prevNumber => prevNumber + 1);
    }, 200); // Change number every 200 milliseconds

    setIntervalId(id); // Save interval ID
  };

  const handleHover = () => {
    if (!intervalId) { // Only start interval if it's not already running
      forFirst();
    }
  };

  const handleMouseLeave = () => {
    clearInterval(intervalId); // Clear interval on mouse leave
    setIntervalId(null); // Reset interval ID
  };

  // useEffect(() => {


  useEffect(() => {
    if (number1 >= 1000) return;

    const interval = setInterval(() => {
      setNumber1(prevNumber => prevNumber + 1);
    }, 200); // Change number every second

    return () => clearInterval(interval);
  }, [number1]);

  useEffect(() => {

    if (number2 >= 100) return;

    const interval = setInterval(() => {
      setNumber2(prevNumber => prevNumber + 1);
    }, 200); // Change number every second

    return () => clearInterval(interval);
  }, [number2]);


  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-gradient-to-b from-[#111] via-zinc-800 to-[#020617] w-full gap-3 mx-auto px-8">
        <Card title={`${ number}  Live Services`} onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave} icon={<FaUsers className="text-8xl font-bold text-white"/>}>
        
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-purple-900"
            
          />
          
        </Card>
        <Card title={`${number1} Request Per Months`} icon={<FaCodePullRequest  className="text-8xl font-bold text-white"/>}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-red-800"
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title={`${number2} Deploys`} icon={<GrDeploy className="text-8xl font-bold text-white"/>}>
          <CanvasRevealEffect
             animationSpeed={5.1}
            containerClassName="bg-blue-900"
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({ title, icon, children }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 h-[30rem] relative"
    >
      {/* <NumberTickerDemo/> */}
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
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-5xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

// const AceternityIcon = () => {
//   return (
//     <svg
//       width="66"
//       height="65"
//       viewBox="0 0 66 65"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
//     >
//       <path
//         d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
//         stroke="currentColor"
//         strokeWidth="15"
//         strokeMiterlimit="3.86874"
//         strokeLinecap="round"
//         style={{ mixBlendMode: "darken" }}
//       />
//     </svg>
//   );
// };

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
