import {useState } from "react";
import { Services } from "./Services";
import { BiChevronRight } from "react-icons/bi";


export const SideBar=({ open, hasService })=> {
  const [openService, setOpenService] = useState(false);

  const setServiceValue = () => {
    if (openService) {
      hasService(false);
      setOpenService(false);
    } else {
      hasService(true);
      setOpenService(true);
    }
  };

  return (
    <div className="block md:hidden">
      <div
        className={`fixed top-14 py-4 ${
          open ? "left-0" : "left-[-1000px]"
        }  overflow-x-hidden ease-in duration-500 bg-white w-full min-h-screen z-40`}
      >
        <ul className="text-left font-medium text-[16px] font-mon space-y-8 mb-[40px] px-[29px] py-[33px]">
          <li className="text-text_primary  hover:text-gray-500">
            <a href="javascript:void(0)" className="">
              About
            </a>
          </li>
          <li className="text-text_primary hover:text-gray-500"></li>
          <li className="text-text_primary hover:text-gray-500">
            <a href="javascript:void(0)">Resources</a>
          </li>
          <li className="text-text_primary hover:text-gray-500 ">
            <a
              href="javascript:void(0)"
              onClick={() => setServiceValue()}
              className="flex justify-between"
            >
              Services{" "}
              <BiChevronRight className="w-[40px] h-[22px] text-text_primary" />
            </a>
          </li>
          <li className="text-text_primary hover:text-gray-500">
            <a href="javascript:void(0)">Partners</a>
          </li>
          <li className="text-text_primary hover:text-gray-500">
            <a href="javascript:void(0)">Speak to us</a>
          </li>
          <li className="text-banner font-semibold text-[16px] font-mon hover:text-gray-500">
            <a href="javascript:void(0)">Sign in</a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              className="inline-block w-full px-[24px] py-[19px] font-semibold text-center text-[16px] font-mon  text-white bg-banner rounded-[10px]  hover:bg-gray-100"
            >
              Sign up
            </a>
          </li>
        </ul>
      </div>
      <Services
        onClick={() => setServiceValue()}
        openService={openService ? "block" : "hidden"}
      />
    </div>
  );
}
