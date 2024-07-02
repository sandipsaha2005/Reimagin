import React from "react";
 
export function DotBackgroundDemo() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-gradient-to-b from-[#111] via-blue-900 to-[#111] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-3xl sm:text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-blue-900 to-blue-700 py-8 px-56">
      <span className="text-7xl mb-4">Scale with confidence</span>
        <br />
        <br />
        Grow your infrastructure, team, and business with a platform that scales alongside you.
      </p>
    </div>
  );
}