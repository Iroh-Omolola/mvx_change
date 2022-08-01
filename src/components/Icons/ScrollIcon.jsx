import React from "react";
import { ScrollUp } from "../../assets/svgs";

export const ScrollIcon = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="fixed md:hidden bottom-[360px] sm:bottom-[440px] right-[3px] sm:right-[25px] lg:bottom-[280px] lg:right-[62px] z-40 h-[48px] w-[48px] lg:h-[96px] lg:w-[96px]  cursor-pointer rounded-full bg-blue shadow-lg"
    >
      <ScrollUp className="mx-auto mt-3.5" />
    </div>
  );
};
