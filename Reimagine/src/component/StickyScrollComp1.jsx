"use client";
import React from "react";
import { StickyScroll1 } from "../ui/StickyScroll1";
// import Image from "next/image";

const content = [
  {
    title: "Automatic Deploys",
    description:
      "Your app is automatically updated on every push, with zero downtime.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img 
        src="https://cdn.sanity.io/images/hvk0tap5/production/108a2a3a856d5f5fdaf5cd7b4f448734df95ee5f-50x50.svg?w=100&fit=max&auto=format" 
        height={300}
        width={350}
        alt="image not found" 
        className=" object-cover"
        />
      </div>
    ),
  },
  {
    title: "Native Language Runtimes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
       <img 
        src="https://cdn.sanity.io/images/hvk0tap5/production/d6789c982c36fa550c1623b4f0168d39f4fc9999-50x50.svg?w=100&fit=max&auto=format" 
        height={300}
        width={350}
        alt="image not found" 
        className=" object-cover"
        />
      </div>
    ),
  },
  {
    title: "Enterprise-Grade Data Stores",
    description:
      "Provision highly available PostgreSQL databases with point-in-time recovery. Create persistent caches with managed Redis.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
       <img 
        src="https://cdn.sanity.io/images/hvk0tap5/production/3efc8cc52efc8261e522e865a19c5e119a4c7046-50x50.svg?w=100&fit=max&auto=format" 
        height={300}
        width={350}
        alt="image not found" 
        className=" object-cover"
        />
      </div>
    ),
  },
  {
    title: "Private Network",
    description:
      "Communicate securely across services using any protocol, without traversing the public Internet.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         <img 
        src="https://cdn.sanity.io/images/hvk0tap5/production/d07d06566246a418bbf69719ec796da979ae132a-50x50.svg?w=100&fit=max&auto=format" 
        height={300}
        width={350}
        alt="image not found" 
        className=" object-cover"
        />
      </div>
    ),
  },
];

export function StickyScrollMain1() {
  return (
    <div className="p-5">
      <StickyScroll1 content={content} />
    </div>
  );
}
