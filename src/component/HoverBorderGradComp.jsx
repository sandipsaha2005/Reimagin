"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/HoverBorderGrad";

export function HoverBorderGradientDemo() {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black text-white flex items-center space-x-2 "
      >
        <AceternityLogo />
        <span>Get Started</span>
      </HoverBorderGradient>
    </div>
  );
}

const AceternityLogo = () => {
  return (
    <img src="/logo.svg" alt="Aceternity Logo" width={17} height={17} />
  );
};
