"use client";
import { TypewriterEffectSmooth } from "../ui/FloatingText";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Click",
      className: "text-red-500 dark:text-purple-900",
    },
    {
      text: "click",
      className: "text-green-500 dark:text-red-900",
    },
    {
      text: "Done",
      className: "text-blue-500 dark:text-blue-900",
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
