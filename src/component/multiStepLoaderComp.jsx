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
    <div className="mt-20 md:mt-3 bg-transparent flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={1500} />

      <button
        onClick={() => setLoading(true)}
        className="bg-gradient-to-r from-red-700 via-red-950 to-black hover:bg-gradient-to-r hover:from-black hover:via-red-950 hover:to-red-700 text-white mx-auto text-base font-medium duration-1000 h-12 rounded-lg px-8 flex items-center justify-center shadow-lg focus:outline-none"
      >
        <span className="animate-pulse mr-2">Don't Think just click</span>
      </button>

      {loading && (
        <button
          className="fixed top-4 right-4 text-white z-[120] bg-gray-800 bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 focus:outline-none"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}
