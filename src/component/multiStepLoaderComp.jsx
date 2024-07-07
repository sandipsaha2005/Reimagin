import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../ui/multiStepLoader";
import { IoClose } from "react-icons/io5";

const loadingStates = [
  {
    text: "Initializing 🚀",
  },
  {
    text: "Processing Data 💾",
  },
  {
    text: "Updating Automatically 🔄",
  },
  {
    text: "Complete ✅",
  },
];

export default function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const startLoading = () => {
    setLoading(true);
    simulateLoading();
  };

  const simulateLoading = () => {
    setTimeout(() => {
      if (currentStep < loadingStates.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setLoading(false);
        setCurrentStep(0); // Reset to the first step
      }
    }, 1000); // Simulating a 1.5s loading duration per step
  };

  const stopLoading = () => {
    setLoading(false);
    setCurrentStep(0); // Reset to the first step
  };

  return (
    <div className="mt-10 h-auto md:min-h-screen bg-gradient-to-b from-[#111] via-[black] to-[#111] flex flex-col items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} currentStep={currentStep} />

      <div className="max-w-4xl w-full px-4">
        <h1 className="text-4xl md:text-7xl font-bold text-center text-gray-800 leading-tight mt-8 mb-14">
          Enhancing <br />
          <span className="text-blue-600">Operational Agility</span>
        </h1>

        <p className="text-lg md:text-xl text-center text-gray-600 leading-relaxed mb-8">
          Streamline your processes with our advanced automation tools. Initiate updates, manage data efficiently, and achieve faster deployment cycles.
        </p>

        {!loading ? (
          <button
            onClick={startLoading}
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600 text-white mx-auto text-lg md:text-xl font-bold duration-1000 h-12 rounded-lg px-8 flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span className="animate-pulse mr-2">Initiate Process</span>
          </button>
        ) : (
          <button
            aria-label="Stop Loading"
            className="fixed top-4 right-4 text-white z-[120] bg-transparent bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 focus:outline-none"
            onClick={stopLoading}
          >
            <IoClose className="h-10 w-10" />
          </button>
        )}
      </div>
    </div>
  );
}
