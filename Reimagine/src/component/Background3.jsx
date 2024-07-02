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
        <br />
      <button className="mt-20 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        Team Matter
        </span>
      </button>
      </p>
      
    </div>
  );
}