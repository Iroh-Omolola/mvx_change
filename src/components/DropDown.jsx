import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";


export const DropDown=()=> {
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <>
      <Menu as="div" className="relative inline-block text-left font-mon">
        <div>
          <Menu.Button
            className={
              "inline-flex justify-center w-full rounded-md  border-none  px-2 py-2 bg-none text-[16px] font-medium text-[ #000000]"
            }
          >
            <h1 className={"titleStyle"}>Services</h1>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute left-0 -mt-1 w-[460px] rounded-[20px] shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
            <div className="py-6 px-4">
              <Menu.Item>
                {({ active }) => (
                  <div className="w-full p-4 flex gap-4 ease-in duration-500 items-center rounded-md cursor-pointer hover:bg-blueLightNav">
                    <div className="w-[39px] h-[39px] rounded-full bg-blueLightNav">
                      <object
                        data="src/assets/freight_forwarding.svg"
                        className="m-auto pt-2"
                        alt=""
                        srcset=""
                      />
                    </div>
                    <div className="">
                      <h1 className="text-[16px] font-semibold font-mon">
                        Freight Forwarding
                      </h1>
                      <p className="text-[12px] font-normal">
                        Easy Freight Forwarding Service
                      </p>
                    </div>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className="w-full p-4 flex gap-4 ease-in duration-500 items-center rounded-md cursor-pointer hover:bg-orangeLightNav">
                    <div className="w-[39px] h-[39px] rounded-full bg-orangeLightNav">
                      <object
                        data="src/assets/freight_finance.svg"
                        className="m-auto pt-2"
                        alt=""
                        srcset=""
                      />
                    </div>
                    <div className="">
                      <h1 className="text-[16px] font-semibold font-mon">
                        Freight Finance
                      </h1>
                      <p className="text-[12px] font-normal">
                        Get finance for your freight forwarding needs
                      </p>
                    </div>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className="w-full p-4 flex gap-4 ease-in duration-500 items-center rounded-md cursor-pointer hover:bg-blueLightNav">
                    <div className="w-[39px] h-[39px] rounded-full bg-blueLightNav">
                      <object
                        data="src/assets/haulage.svg"
                        className="m-auto pt-3"
                        alt=""
                        srcset=""
                      />
                    </div>
                    <div className="">
                      <h1 className="text-[16px] font-semibold font-mon">
                        Haulage
                      </h1>
                      <p className="text-[12px] font-normal">
                        Overland Logistics You Can Rely On
                      </p>
                    </div>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className="w-full p-4 flex gap-4 ease-in duration-500 items-center rounded-md cursor-pointer hover:bg-orangeLightNav">
                    <div className="w-[39px] h-[39px] rounded-full bg-orangeLightNav">
                      <object
                        data="src/assets/customs.svg"
                        className="m-auto pt-2.5"
                        alt=""
                        srcset=""
                      />
                    </div>
                    <div className="">
                      <h1 className="text-[16px] font-semibold font-mon">
                        Customs
                      </h1>
                      <p className="text-[12px] font-normal">
                        Clear your cargo fast
                      </p>
                    </div>
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
