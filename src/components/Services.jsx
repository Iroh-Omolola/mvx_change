import { BiChevronLeft } from "react-icons/bi";


export const Services=({ onClick, openService })=> {

  return (
    <>
      <div className="font-mon text-text_primary ">
        <div className="mx-auto font-mon bg-white flex items-center">
          <div
            className={`bg-white w-full min-h-screen fixed top-0 z-[60] ${openService}`}
          >
            <div
              className="flex cursor-pointer py-6 px-[25px] font-semibold font-mon text-[18px] text-left"
              onClick={onClick}
            >
              <BiChevronLeft className="w-[40px] h-[22px] text-text_primary mt-[3px] mr-[5px]" />{" "}
              Services
            </div>
            <hr className="px-0 text-altGrey" />
            <div className="absolute   left-0 mt-[20px] w-[460px]  bg-white  divide-y divide-gray-100 focus:outline-none">
              <div className="py-6">
                <div className="w-full px-[32px] py-4 flex gap-4 ease-in duration-500 items-center cursor-pointer hover:bg-blueLight">
                  <div className="w-[39px] h-[39px] rounded-full bg-blueLight">
                    <object
                      data="../src/assets/freight_forwarding.svg"
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
                <div className="w-full py-4 px-[32px] flex gap-4 ease-in duration-500 items-center rounded-md cursor-pointer hover:bg-orangeLight">
                  <div className="w-[39px] h-[39px] rounded-full bg-orangeLight">
                    <object
                      data="../src/assets/freight_finance.svg"
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

                <div className="w-full py-4 px-[32px] flex gap-4 ease-in duration-500 items-center rounded-md cursor-pointer hover:bg-blueLight">
                  <div className="w-[39px] h-[39px] rounded-full bg-blueLight">
                    <object
                      data="../src/assets/haulage.svg"
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
                <div className="w-full py-4 px-[32px] flex gap-4 ease-in duration-500 items-center rounded-md cursor-pointer hover:bg-orangeLight">
                  <div className="w-[39px] h-[39px] rounded-full bg-orangeLight">
                    <object
                      data="../src/assets/customs.svg"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
