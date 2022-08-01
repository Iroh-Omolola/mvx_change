import React from "react";
import { ScrollIconDown } from "../../assets/svgs";

export const ScrollIconTwo=({ onClick })=> {
  return (
    <div
      onClick={onClick}
      className="hidden  md:flex w-full justify-center z-40"
    >
      <div className="flex flex-col cursor-pointer md:pr-[190px]">
        <ScrollIconDown width={72} />
        <p className="text-[16px] text-text_primary mt-1 whitespace-nowrap">Scroll down</p>
      </div>
    </div>
  );
}
