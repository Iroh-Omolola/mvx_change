import React from "react";

export const WithIcon=({ title, icon }) =>{
  return (
    <button className="font-mon flex rounded-md bg-transparent p-4 px-8 text-[18px] font-semibold">
      {title}
      {icon}
    </button>
  );
}
