import React from "react";
import NumberTicker from "../ui/NumberCount";

const NumberTickerDemo = ({ number }) => {
  console.log(number);
  return (
    <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
      <NumberTicker value={10000} />
    </p>
  );
};

export default NumberTickerDemo;
