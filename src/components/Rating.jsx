
export const Rating=() =>{

  return (
    <div className="mt-6 lg:my-[80px] flex flex-col gap-8 font-mon">
      <p className="font-normal text-[18px]">Trusted by global companies</p>
      <div className="hidden md:grid lg:grid grid-cols-5">
        <div className="mb-4 lg:mb-0 lg:w-full">
          <h1 className="text-blue mb-[3px] text-[25px] xl:text-[32px] font-bold">
            300+
          </h1>
          <p className="text-[14px] font-normal">Companies serviced</p>
        </div>
        <div className="mb-4 lg:mb-0 lg:w-full">
          <h1 className="text-blue  mb-[3px] text-[25px] xl:text-[32px]  font-bold">
            $2.3million+
          </h1>
          <p className="text-[14px] font-normal">
            Generated for partners in revenue
          </p>
        </div>
        <div className="mb-4 lg:mb-0 lg:w-full">
          <h1 className="text-blue text-[25px] mb-[3px] xl:text-[32px] font-bold">
            5000+
          </h1>
          <p className="text-[14px] font-normal">Containers delivered</p>
        </div>
        <div className="mb-4 lg:mb-0 lg:w-full">
          <h1 className="text-blue mb-[3px] text-[25px] xl:text-[32px] font-bold">
            5000+
          </h1>
          <p className="text-[14px] font-normal">Trade transactions financed</p>
        </div>
        <div className="mb-4 lg:mb-0 lg:w-full">
          <h1 className="text-blue text-[25px] mb-[3px] xl:text-[32px] font-bold">
            80%
          </h1>
          <p className="text-[14px] font-normal">
            Of our customers have returned again
          </p>
        </div>
      </div>
      <div className="lg:hidden md:hidden flex flex-wrap lg:flex-nowrap">
        <div className="mb-4 w-[50%] lg:mb-0 lg:w-full">
          <h1 className="text-blue text-[18px] font-bold">300+</h1>
          <p className="text-[14px] font-normal">Companies serviced</p>
        </div>
        <div className=" mb-4 w-[50%] lg:mb-0 lg:w-full">
          <h1 className="text-blue text-[18px] font-bold">5000+</h1>
          <p className="text-[14px] font-normal">Containers delivered</p>
        </div>
        <div className="mb-4 w-[50%] lg:mb-0 lg:w-full">
          <h1 className="text-blue text-[18px] font-bold">$2.3million+</h1>
          <p className="text-[14px] font-normal">
            Generated for partners in revenue
          </p>
        </div>
        <div className="mb-4 w-[50%] lg:mb-0 lg:w-full">
          <h1 className="text-blue text-[18px] font-bold">5000+</h1>
          <p className="text-[14px] font-normal">Trade transactions financed</p>
        </div>
        <div className="mb-4 w-[50%] lg:mb-0 lg:w-full">
          <h1 className="text-blue text-[18px] font-bold">80%</h1>
          <p className="text-[14px] font-normal">
            Of our customers have returned again
          </p>
        </div>
      </div>
    </div>
  );
}



 