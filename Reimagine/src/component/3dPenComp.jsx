
import React from "react";
import { PinContainer } from "../ui/3dPen";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <PinContainer
        title="MITCHELL HASHIMOTO, CO-FOUNDER OF HASHICORP"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[28rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
          MITCHELL HASHIMOTO
          </h3>
          <div className="text-sm !m-0 !p-0 font-normal">
            <span className="text-slate-500">
            Easier than large clouds, more feature-rich than single-purpose hosting providers, Render lets me ship the entirety of my projects in one place.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-md mt-4 " />
          <img 
          src="https://cdn.sanity.io/images/hvk0tap5/production/6c945bf43f176d1c926d0b40399eed4c431a6786-1080x1080.png?w=720&fm=webp&fit=max&auto=format" 
          alt="Image Not Found" 
          className="rounded-md"
          />

        </div>
      </PinContainer>
    </div>
  );
}
