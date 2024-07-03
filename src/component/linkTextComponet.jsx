import React from "react";
import { motion } from "framer-motion";
import LinkPreview from "../ui/LinkTest"; // Adjust the import path based on your project structure

export function LinkPreviewDemo() {
  return (
  
      <div className="bg-[#111] text-center py-8 my-10">
      <h2 className="text-zinc-700 text-3xl mb-8">
        Trusted by over a million developers and teams
      </h2>
      <div className="flex justify-around items-center invert">

        <LinkPreview url="https://equals.com/" className="font-bold">
        <img
          src="https://cdn.sanity.io/images/hvk0tap5/production/496d78a30eec55b7b39eb68f86ec06aaff05a1e1-163x38.svg?w=400&fit=max&auto=format"
          // alt="Equals"
          className="h-12 mx-4 grayscale hover:grayscale-0 transition duration-300"
        />
        </LinkPreview>{" "}
       
        <LinkPreview url="https://watershed.com/" className="font-bold">
        <img
          src="https://cdn.sanity.io/images/hvk0tap5/production/646e016250d4557c4694165243f6349de6d58926-178x36.svg?w=400&fit=max&auto=format"
          alt="Watershed"
          className="h-12 mx-4 grayscale hover:grayscale-0 transition duration-300"
        />
        </LinkPreview>{" "}
        <LinkPreview url="https://www.redbull.com/in-en" className="font-bold">
        <img
          src="https://cdn.sanity.io/images/hvk0tap5/production/eb58014b87c1b8ce98096a1fc129a1a6a02ba0f2-159x32.svg?w=400&fit=max&auto=format"
          alt="RedBull"
          className="h-12 mx-4 grayscale hover:grayscale-0 transition duration-300"
        />
        </LinkPreview>{" "}
        <LinkPreview url="https://readme.com/" className="font-bold">
        <img
          src="https://cdn.sanity.io/images/hvk0tap5/production/fe42b7277a93535a0d9fdf5803b1a0da70599353-199x34.svg?w=400&fit=max&auto=format"
          alt="ReadMe"
          className="h-12 mx-4 grayscale hover:grayscale-0 transition duration-300"
        />
        </LinkPreview>{" "}
        <LinkPreview url="https://felt.com/" className="font-bold">
        <img
          src="https://cdn.sanity.io/images/hvk0tap5/production/350f4f4df4d25a2eaf80e76fb5625acdfdd4cdbb-75x44.svg?w=400&fit=max&auto=format"
          alt="Felt"
          className="h-12 mx-4 grayscale hover:grayscale-0 transition duration-300"
        />
        </LinkPreview>{" "}
        
        </div>
        </div>
      
     
  );
}

export default LinkPreviewDemo;
