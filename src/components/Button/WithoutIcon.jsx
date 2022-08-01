import React from "react";

export const WithoutIcon = ({title}) => {
  return (
    <button className="mt-6 font-mon font-medium text-[16px] whitespace-nowrap lg:text-[18px] rounded-md bg-banner p-1 px-4 lg:p-4 lg:px-8 text-white hover:bg-gray-500">
      {title}
    </button>
  );
}
