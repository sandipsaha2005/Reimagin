import React from "react";
 
export function GridSmallBackgroundDemo() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-gradient-to-b from-[#111] via-purple-900 to-[#111] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-3xl sm:text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-purple-900 to-purple-700 py-8 px-56">
      <span className="text-7xl mb-4">Ship together</span>
        <br />
        <br />
        Collaborate with your team on everything from one-line fixes to full-scale migrations.
      </p>
    </div>
  );
}