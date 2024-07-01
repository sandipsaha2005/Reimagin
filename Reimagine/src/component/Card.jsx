"use client";

// import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/CardThings";

export function ServiceCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ={50}
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Service Types
        </CardItem>
        <CardItem
          as="p"
          translateZ={60}
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Spin up web services, static sites, cron jobs, and more.
        </CardItem>
        <CardItem
          translateZ={100}
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <img
            src="https://cdn.sanity.io/images/hvk0tap5/production/a720daac5ff5df2c089c6b5674f2969f34c47331-813x627.png?fit=max&auto=format"
            height={813}
            width={627}
            className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
export function DeployCard(){
  return(
    <CardContainer className="inter-var">
    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
      <CardItem
        translateZ={50}
        className="text-xl font-bold text-neutral-600 dark:text-white"
      >
        Deploy Things
      </CardItem>
      <CardItem
        as="p"
        translateZ={60}
        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
      >
        Build and run your apps with lightning speed and flexible config.
      </CardItem>
      <CardItem
        translateZ={100}
        rotateX={20}
        rotateZ={-10}
        className="w-full mt-4"
      >
        <img
          src="https://cdn.sanity.io/images/hvk0tap5/production/e4a85813ecf6bdf12ca735a8233ffebf2e1f93a1-960x621.png?fit=max&auto=format"
          height={960}
          width={621}
          className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
      <div className="flex justify-between items-center mt-5">
        <CardItem
          translateZ={20}
          translateX={-40}
          as="button"
          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
        >
          Try now →
        </CardItem>
        <CardItem
          translateZ={20}
          translateX={40}
          as="button"
          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
        >
          Sign up
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
  );
}
export function UpdateCard(){
  return(
    <CardContainer className="inter-var">
    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
      <CardItem
        translateZ={50}
        className="text-xl font-bold text-neutral-600 dark:text-white"
      >
        Update Faster
      </CardItem>
      <CardItem
        as="p"
        translateZ={60}
        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
      >
        Stay current with your code thanks to seamless, automatic redeploys.
      </CardItem>
      <CardItem
        translateZ={100}
        rotateX={20}
        rotateZ={-10}
        className="w-full mt-4"
      >
        <img
          src="https://cdn.sanity.io/images/hvk0tap5/production/31efb9ea4718e42857ef33a6d9f4ccfcbf23473d-816x700.png?fit=max&auto=format"
          height={813}
          width={627}
          className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
      <div className="flex justify-between items-center mt-6">
        <CardItem
          translateZ={20}
          translateX={-40}
          as="button"
          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
        >
          Try now →
        </CardItem>
        <CardItem
          translateZ={20}
          translateX={40}
          as="button"
          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
        >
          Sign up
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
  );
}
