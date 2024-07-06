"use client";
import React from "react";
import { TypewriterEffectSmooth } from "../ui/FloatingText";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Click",
      className: "dark:text-blue-700 text-3xl md:text-5xl",
    },
    {
      text: "Click",
      className: "dark:text-blue-700 text-3xl md:text-5xl",
    },
    {
      text: "Done",
      className: "dark:text-blue-700 text-3xl md:text-5xl",
    },
    // {
    //   text: "with",
    // },
    // {
    //   text: "Aceternity.",
    //   className: "text-blue-500 dark:text-blue-500",
    // },
  ];

  return (
    // <div className="flex flex-col items-center justify-center h-[40rem]">
      <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
      </div>
    // </div>
  );
}
