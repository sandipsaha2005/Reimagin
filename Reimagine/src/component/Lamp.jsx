import { useState } from "react";
import { LampContainer } from "../ui/slidingText";
import { motion } from "framer-motion";
import { FaCloud } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { IoIosBuild } from "react-icons/io";

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
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-5 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-5xl"
      >
        <span
          className="inline-block"
          onMouseEnter={() => setIsBuildHovered(true)}
          onMouseLeave={() => setIsBuildHovered(false)}
        >
          {isBuildHovered ? (
            <span className="text-emerald-500">Build</span>
          ) : (
            <IoIosBuild className="text-5xl text-emerald-500 cursor-pointer" />
          )}
        </span>
        {" "}with Render <br />
        The modern{" "}
        <span
          className="inline-block"
          onMouseEnter={() => setIsCloudHovered(true)}
          onMouseLeave={() => setIsCloudHovered(false)}
        >
          {isCloudHovered ? (
            <span className="text-blue-400">Cloud</span>
          ) : (
            <FaCloud className="text-5xl text-blue-400 cursor-pointer" />
          )}
        </span>{" "}
        for developers and{" "}
        <span
          className="inline-block"
          onMouseEnter={() => setIsTeamHovered(true)}
          onMouseLeave={() => setIsTeamHovered(false)}
        >
          {isTeamHovered ? (
            <span className="text-red-400">Team</span>
          ) : (
            <AiOutlineTeam className="text-5xl text-red-400 cursor-pointer" />
          )}
        </span>.
      </motion.h1>
    </LampContainer>
  );
}
