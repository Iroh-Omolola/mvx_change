import { useState } from "react";
import { Close, Menu, MVXLogo } from "../assets/svgs/index";
import { DropDown } from "./DropDown";

export const NavBar = ({ hasSet }) => {
  const [navbar, setNavbar] = useState(false);

  const setNavValue = () => {
    if (navbar) {
      hasSet(false);
      setNavbar(false);
    } else {
      hasSet(true);
      setNavbar(true);
    }
  };

  return (
    <nav className="font-mon w-full  ">
      <div className="md:flex justify-between md:items-center px-2 lg:px-6">
        <div className="">
          <div className="flex items-center justify-between  py-2 md:py-5 md:block">
            <a href="javascript:void(0)">
              <div className="block mr-6 -mt-1 lg:hidden">
                <MVXLogo width={61} height={18} />
              </div>
              <div className="hidden mr-6 -mt-1 lg:block">
                <MVXLogo width={114} height={36} />
              </div>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavValue()}
              >
                {navbar ? (
                  <Close width={17} height={17} className="text-text_primary" />
                ) : (
                  <Menu width={32} height={32} className="text-text_primary" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 hidden`}
          >
            <ul className="items-center font-medium justify-center space-y-8 md:flex sm:space-x-3 md:space-y-0">
              <li className="text-text_primary hover:text-gray-500">
                <a href="javascript:void(0)">About</a>
              </li>
              <li className="text-text_primary hover:text-gray-500">
                <DropDown />
              </li>
              <li className="text-text_primary hover:text-gray-500">
                <a href="javascript:void(0)">Resources</a>
              </li>
              <li className="text-text_primary hover:text-gray-500">
                <a href="javascript:void(0)">Partners</a>
              </li>
              <li className="text-text_primary hover:text-gray-500">
                <a href="javascript:void(0)">Speak to us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <a
            href="javascript:void(0)"
            className="px-4 py-2 font-semibold text-text_primary hover:text-gray-500"
          >
            Sign in
          </a>
          <a
            href="javascript:void(0)"
            className="px-6 py-3 font-normal  text-white bg-banner rounded-[10px]  hover:bg-gray-500"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};
