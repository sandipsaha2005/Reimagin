import React from "react";

export function DotBackgroundDemo() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-gradient-to-b from-[#111] via-blue-900 to-[#111] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-3xl sm:text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-blue-900 to-blue-700 py-8 px-32">
        <span className="text-5xl md:text-7xl mb-4">Scale with confidence</span>
        <br />
        <br />
        Grow your infrastructure, team, and business with a platform that scales
        alongside you.
        <br />
        <button className="text-base mt-20 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-5 py-2 bg-[#11529d] rounded-md text-white font-light transition duration-200 ease-linear">
          Confidence Matter
        </button>
      </p>
    </div>
  );
}
