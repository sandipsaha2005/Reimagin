"use client";
import React from "react";
import { StickyScroll2 } from "../ui/StickyScroll2";
// import Image from "next/image";

const content = [
  {
    title: "Load-Based Autoscaling",
    description:
      "Add and remove instances of your service automatically as traffic patterns change.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img 
        src="https://cdn.sanity.io/images/hvk0tap5/production/b432261ad42d833a80594faf436f34651c0b2159-50x50.svg?w=100&fit=max&auto=format" 
        height={300}
        width={350}
        alt="image not found" 
        className=" object-cover"
        />
      </div>
    ),
  },
  {
    title: "Infrastructure as Code",
    description:
      "Define the entirety of your infrastructure in a single Blueprint file and quickly replicate it across environments.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
       <img 
        src="https://cdn.sanity.io/images/hvk0tap5/production/bfaa898077bdd65fcaa7516dacf0a21bff5fb472-50x50.svg?w=100&fit=max&auto=format" 
        height={300}
        width={350}
        alt="image not found" 
        className=" object-cover"
        />
      </div>
    ),
  },
  {
    title: "DDoS Protection",
    description:
      "Defend against denial-of-service attacks simply by hosting on Render—no additional setup required.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
       <img 
        src="https://cdn.sanity.io/images/hvk0tap5/production/3f61af94f30ff59b24399574e01119c2300f61c6-50x50.svg?w=100&fit=max&auto=format" 
        height={300}
        width={350}
        alt="image not found" 
        className=" object-cover"
        />
      </div>
    ),
  },
  {
    title: "Data Privacy",
    description:
      "Keep data secure for yourself and your customers with full GDPR and SOC 2 Type II compliance.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         <img 
        src="https://cdn.sanity.io/images/hvk0tap5/production/1ab4ffd26e8fbde89ae2a90b53c4078223e7bff6-50x50.svg?w=100&fit=max&auto=format" 
        height={300}
        width={350}
        alt="image not found" 
        className=" object-cover"
        />
      </div>
    ),
  },
];

export function StickyScrollMain2() {
  return (
    <div className="p-5">
      <StickyScroll2 content={content} />
    </div>
  );
}
