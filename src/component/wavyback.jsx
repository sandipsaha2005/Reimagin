import React from "react";
import { WavyBackground } from "../ui/wavy";
import { TabsDemo } from '../ui/UseTab';
import logo from '../assets/render-logo.png';

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center items-center align-middle">
      <img className=" inline-block mb-2 h-16 invert" src={logo} alt="Render Logo" />
        .fastest path to production
      </p>
      <p className="text-base md:text-2xl mt-4 text-white font-normal inter-var text-center">
        Build, deploy, and scale your apps with unparalleled ease – from your first user to your billionth.
      </p>
    </WavyBackground>
  );
}