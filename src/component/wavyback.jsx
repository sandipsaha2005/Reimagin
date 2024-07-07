import React from "react";
import { WavyBackground } from "../ui/wavy";
import logo from '../assets/render-logo.png';
import { HoverBorderGradientDemo } from './HoverBorderGradComp'

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="px-4 md:max-w-4xl md:mx-auto">
      
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center items-center align-middle">
      <img className=" inline-block mb-2 md:h-16 h-5 invert" src={logo} alt="Render Logo" />
        .fastest path to production
      </p>
      <p className="text-base md:text-2xl mt-4 text-white font-normal inter-var text-center mb-8">
        Build, deploy, and scale your apps with unparalleled ease – from your first user to your billionth.
      </p>
      <div className=" items-start">
        <HoverBorderGradientDemo/>
      </div>
    </WavyBackground>
  );
}
