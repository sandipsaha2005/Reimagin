"use client";

import React from "react";
import { Tabs } from "../component/Tabs";
import {ServiceCard} from '../component/Card'
import {DeployCard} from '../component/Card'
import {UpdateCard} from '../component/Card'
export function TabsDemo() {
  const tabs = [
    {
      title: "Service",
      value: "Service",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Choose your service type</p>
          <ServiceContent />
        </div>
      ),
    },
    {
      title: "Deploy",
      value: "Deploy",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Deploy in seconds</p>
          <DeployContent />
        </div>
      ),
    },
    {
      title: "Update",
      value: "Update",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Update automatically</p>
          <UpdateContent/>
        </div>
      ),
    },
   
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-3xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const ServiceContent = () => {
  return (
      <ServiceCard/>
  );
};
const DeployContent = () => {
  return (
      <DeployCard/>
  );
};
const UpdateContent = () => {
  return (
      <UpdateCard/>
  );
};
