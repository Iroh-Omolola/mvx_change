
import React from "react";
import { Chat } from "../../assets/svgs";

export const ChatIcon=()=> {

  return (
    <div className="fixed sm:bottom-[380px] bottom-[300px] right-[3px] sm:right-[25px] lg:bottom-[140px] border lg:right-[70px] z-40 h-[48px] w-[48px]  md:h-[66px] md:w-[66px] lg:h-[96px] lg:w-[96px] cursor-pointer rounded-full bg-white shadow-md">
      <div className="block md:hidden lg:hidden">
        <Chat width={25} height={25} className="mx-auto mt-2.5" />
      </div>
      <div className="hidden md:hidden  lg:block">
        <Chat width={49} height={49} className="mx-auto  mt-6 " />
      </div>
      <div className="hidden  md:block lg:hidden">
        <Chat width={35} height={35} className="mx-auto  mt-4 " />
      </div>
    </div>
  );

}

 