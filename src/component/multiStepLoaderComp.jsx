"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../ui/multiStepLoader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
  {
    text: "Select Service 📝",
  },
  {
    text: "Deploy Things 🚀",
  },
  {
    text: "Update Automatic 🥱",
  },
  {
    text: "Done ✅",
  },
];

export default function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full h-fit flex items-center justify-center bg-transparent">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={1500} />

      <button
        onClick={() => setLoading(true)}
        className=" bg-gradient-to-tr to-purple-950 via-blue-700 from-blue-950 hover:bg-[#39C3EF]/90 text-white mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
        // style={{
        //   boxShadow:
        //     "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        // }}
      >
        Why? 👆 👆 ✅
      </button>

      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}
