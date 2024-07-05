import { useState } from "react";
import { LampContainer } from "../ui/slidingText";
import { motion } from "framer-motion";
import { FaCloud } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { IoIosBuild } from "react-icons/io";
import { HoverBorderGradientDemo } from './HoverBorderGradComp'

export function LampDemo() {
  const [isBuildHovered, setIsBuildHovered] = useState(false);
  const [isCloudHovered, setIsCloudHovered] = useState(false);
  const [isTeamHovered, setIsTeamHovered] = useState(false);

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.2,
          ease: "easeInOut",
        }}
        className="mt-3 bg-gradient-to-br from-slate-300 to-slate-500 py-1 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-5xl"
      >
        <span
          className={`inline-block transition-opacity cursor-pointer ${isBuildHovered ? 'text-emerald-500' : ''}`}
          onMouseEnter={() => setIsBuildHovered(true)}
          onMouseLeave={() => setIsBuildHovered(false)}
        >
          <IoIosBuild className="text-5xl text-emerald-500" />
          <span className={`absolute opacity-0 top-0 left-40 ${isBuildHovered ? 'opacity-100' : ''} transition-opacity duration-500`}>
            Build
          </span>
        </span>{" "}with Render <br />
        The modern{" "}
        <span
          className={`inline-block transition-opacity cursor-pointer ${isCloudHovered ? 'text-blue-400' : ''}`}
          onMouseEnter={() => setIsCloudHovered(true)}
          onMouseLeave={() => setIsCloudHovered(false)}
        >
          <FaCloud className="text-5xl text-blue-400" />
          <span className={`absolute opacity-0 ${isCloudHovered ? 'opacity-100' : ''} transition-opacity duration-500`}>
            Cloud
          </span>
        </span>{" "}
        for developers and{" "}
        <span
          className={`inline-block transition-opacity cursor-pointer ${isTeamHovered ? 'text-red-400' : ''}`}
          onMouseEnter={() => setIsTeamHovered(true)}
          onMouseLeave={() => setIsTeamHovered(false)}
        >
          <AiOutlineTeam className="text-5xl text-red-400" />
          <span className={`absolute opacity-0 ${isTeamHovered ? 'opacity-100' : ''} transition-opacity duration-500`}>
            Team
          </span>
        </span>.
        <div className="text-base mt-10">
          <HoverBorderGradientDemo/>
        </div>
      </motion.h1>
    </LampContainer>
  );
}
