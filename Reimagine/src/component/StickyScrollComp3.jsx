"use client";
import React from "react";
import { StickyScroll3 } from "../ui/StickyScroll3";
// import Image from "next/image";

const content = [
  {
    title: "Project Management",
    description:
      "Group your services logically and set up production, staging, and other environments.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img 
        src="https://cdn.sanity.io/images/hvk0tap5/production/e9aaf94fa314858487f3fdd331b2430f161b3788-50x50.svg?w=100&fit=max&auto=format" 
        height={300}
        width={350}
        alt="image not found" 
        className=" object-cover"
        />
      </div>
    ),
  },
  {
    title: "Preview Environments",
    description:
      "Test out your team’s pull requests in standalone instances, or even spin up temporary copies of your entire production environment.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
       <img 
        src="https://cdn.sanity.io/images/hvk0tap5/production/41f8882d8e70a1e60c814c69201d1f9021a61050-50x50.svg?w=100&fit=max&auto=format" 
        height={300}
        width={350}
        alt="image not found" 
        className=" object-cover"
        />
      </div>
    ),
  },
  {
    title: "Platform Notifications",
    description:
      "Connect your Slack workplace to stay informed about deployment activity and service hiccups across your team.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
       <img 
        src="https://cdn.sanity.io/images/hvk0tap5/production/0509faa8f23788304f14a3a3230cc1c11984427d-50x50.svg?w=100&fit=max&auto=format" 
        height={300}
        width={350}
        alt="image not found" 
        className=" object-cover"
        />
      </div>
    ),
  },
  {
    title: "Role-Based Access",
    description:
      "Limit who can manage your team’s billing, security settings, and more.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         <img 
        src="https://cdn.sanity.io/images/hvk0tap5/production/d7299d90d0fe68fd84b46fdb19a5bd9f775bd044-50x50.svg?w=100&fit=max&auto=format" 
        height={300}
        width={350}
        alt="image not found" 
        className=" object-cover"
        />
      </div>
    ),
  },
];

export function StickyScrollMain3() {
  return (
    <div className="p-5">
      <StickyScroll3 content={content} />
    </div>
  );
}
