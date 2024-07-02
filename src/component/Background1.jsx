import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-opacity-20 bg-opacity-20 relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black via-red-900 to-[#111] pointer-events-none"></div>
      
      <p className="text-3xl sm:text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 py-8">
        <span className="text-7xl mb-4 text-[#af991b]">Build with speed</span>
        <br />
        <br />
        Link your repo and go live—then iterate with every push.
        <br />
        <button className="relative px-8 py-3 mt-16 border-2 border-black dark:border-white uppercase bg-gradient-to-r from-[#af991b] via-red-800 to-red-950 text-[#fcdf37] transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0),6px_6px_0px_0px_rgba(0,0,0),9px_9px_0px_0px_rgba(0,0,0),12px_12px_0px_0px_rgba(0,0,0),15px_15px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255),6px_6px_0px_0px_rgba(255,255,255),9px_9px_0px_0px_rgba(255,255,255),12px_12px_0px_0px_rgba(255,255,255),15px_15px_0px_0px_rgba(255,255,255)]">
  Speed Matter
</button>

      </p>
    </div>
  );
}
