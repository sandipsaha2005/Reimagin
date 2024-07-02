import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-opacity-20 bg-opacity-20 relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-[#111] dark:bg-red-900 pointer-events-none"></div>
      
      <p className="text-3xl sm:text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 py-8">
        <span className="text-7xl mb-4 text-[#af991b]">Build with speed</span>
        <br />
        <br />
        Link your repo and go live—then iterate with every push.
      </p>
    </div>
  );
}
