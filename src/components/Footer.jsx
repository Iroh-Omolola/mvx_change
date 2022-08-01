import {
  MVXLogo,
  MVXLogoFooter,
  CopyRight,
  FaceBook,
  InstaGram,
  Mail,
  LinkedIn,
  Twitter,
} from "../assets/svgs/index";

export const Footer = () => {
  return (
    <footer className="lg:px-[170px] lg:pt-[200px] px-[25px] pt-[40px] font-mon text-left  text-text_primary mb-10">
      <div className="border-b-[0.1px] border-grey mb-[60px]">
        <div className="flex flex-col lg:flex-row  text-center lg:text-left w-full lg:justify-between lg:mb-[80px] mb-[43px]">
          <div className="mr-12 lg:mb-0 mb-[32px] w-full">
            <h1 className="flex flex-col text-[20px] lg:text-[32px]  mb-[15px] font-bold text-text_primary lg:mb-6">
              Ready to Unlock Supply Chain Opportunities?
            </h1>
            <p className="lg:text-[18px] text-[14px] font-normal">
              Join 300+ top brands that have trusted us with their freight
              forwarding
            </p>
          </div>
          <div className="">
            <button className="font-mon font-medium p-1 py-[19px] px-[24px] text-[16px] whitespace-nowrap lg:text-[18px] rounded-[20px] bg-blue  lg:py-[25px] lg:px-[52px] text-white hover:bg-gray-500">
              Get started
            </button>
          </div>
        </div>
      </div>
      <div className="py-10 text-text_primary font-mon text-start md:text-left lg:mb-[30px] border-b-[0.1px] border-grey mb-[60px]">
        <div className="grid grid-cols-2 sm:grid-cols-4  w-full lg:grid-cols-5 lg:mb-[30px] ">
          <div className="hidden lg:block w-full">
            <a href="javascript:void(0)">
              <div className="block mr-6 mb-[35px] -mt-1 lg:hidden">
                <MVXLogo width={61} height={18} />
              </div>
              <div className="hidden mb-[35px] mr-6 -mt-1 lg:block">
                <MVXLogo width={114} height={36} />
              </div>
            </a>
            <p className="mb-4 font-semibold">
              T:
              <a href="#!" className="ml-2">
                +2347040119703
              </a>
            </p>
            <p className="mb-4 font-semibold">
              E:
              <a href="#!" className=" ml-2">
                <span className=" mt-2 underline">hello@mvx.trade</span>
              </a>
            </p>
            <div className="mb-4 font-semibold">
              <p> Austin:</p>
              <span className="text-grey font-normal ">
                7000 North Mopac Expressway, <br /> Austin, TX, 78731 <br /> T:
                +1 512 514 6221
              </span>
            </div>
            <div className="mb-4 font-semibold">
              <p> Lagos:</p>
              <span className="text-grey font-normal">
                19 Dr. S Ezekuse Close, <br /> Lekki Phase 1, Lagos
              </span>
            </div>
          </div>

          <div className="lg:mb-0 font-mon mb-[37px]">
            <h6 className="font-semibold  mb-[35px] text-blue text-[16px]  lg:text-[20px]  md:justify-start">
              Home
            </h6>
            <p className="mb-4">
              <a href="#!" className="font-medium text-[14px] ">
                Home
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="font-medium text-[14px]">
                About
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="font-medium text-[14px]">
                Partners
              </a>
            </p>
            <p>
              <a href="#!" className="font-medium text-[14px]">
                Careers
              </a>
            </p>
          </div>
          <div className="lg:mb-0  mb-[37px]">
            <h6 className=" text-blue font-semibold mb-[35px] text-[16px]  lg:text-[20px]">
              Services
            </h6>
            <p className="mb-4">
              <a href="#!" className="font-medium text-[14px]">
                Freight Forwarding
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="font-medium text-[14px]">
                Customs
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="font-medium text-[14px]">
                Trade Finance
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="font-medium text-[14px]">
                Land Haulage
              </a>
            </p>

            <p className="mb-4">
              <a href="#!" className="font-medium text-[14px]">
                Trade Finance
              </a>
            </p>
          </div>

          <div className="lg:mb-0  mb-[37px]">
            <h6 className=" text-blue font-semibold mb-[35px] text-[16px]  lg:text-[20px]   justify-start">
              Resources
            </h6>
            <p className="mb-4">
              <a href="#!" className="font-medium text-[14px]">
                Help & Support
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="font-medium text-[14px]">
                Feedback
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="font-medium text-[14px]">
                Referral
              </a>
            </p>
          </div>
          <div className="lg:mb-0  mb-[37px]">
            <h6 className=" text-blue font-semibold mb-[35px] text-[16px]  lg:text-[20px]   justify-start">
              Legal
            </h6>
            <p className="mb-4">
              <a href="#!" className="font-medium text-[14px]">
                Privacy policy
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="font-medium text-[14px]">
                Cookie policy
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="font-medium text-[14px]">
                Terms & Conditions
              </a>
            </p>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="flex justify-between ">
            <p className="mb-4 font-semibold text-[14px]">
              T:
              <a href="#!" className="ml-2 text-[14px]">
                +2347040119703
              </a>
            </p>
            <p className="mb-4 font-semibold text-[14px]">
              E:
              <a href="#!" className=" ml-2">
                <span className=" mt-2 underline text-[14px]">
                  hello@mvx.trade
                </span>
              </a>
            </p>
          </div>
          <div className="mb-[50px]">
            <div className="flex flex-col text-center font-mon">
              <h3 className="mb-[7px] leading-5  font-semibold text-[14px] text-text_primary">
                Lagos:
              </h3>
              <p className="mb-[17px] leading-6 text-[14px] text-grey font-normal">
                19 Dr. S Ezekuse Close, <br /> Lekki Phase 1, Lagos
              </p>
            </div>
            <div className="flex flex-col text-center leading-5 ">
              <h3 className="mb-[7px] font-semibold text-[14px] text-text_primary ">
                Austin:
              </h3>
              <p className="mb-[17px] leading-6  text-[14px] font-normal text-grey">
                7000 North Mopac Expressway, <br /> Austin, TX, 78731 <br /> T:
                +1 512 514 6221
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="md:flex w-full md:justify-between mb-[72px]">
          <div className="justify-center md:flex md:justify-between ">
            <div className="md:mb-0 mb-[26px]">
              <a href="javascript:void(0)">
                <div className="lg:mr-6">
                  <MVXLogoFooter width={70} height={20} className="mx-auto" />
                </div>
              </a>
            </div>
            <div className="md:mb-0 mb-[36px]">
              {" "}
              <h1 className="flex justify-center gap-0 text-center text-text_primary">
                <CopyRight
                  width={16}
                  height={16}
                  className="mt-[2px] mr-[9px]"
                />
                <span className="text-[14px] font-mon font-medium ">
                  MVXchange Technologies Limited
                </span>
              </h1>
            </div>
          </div>
          <div className="flex  md:grid justify-center md:grid-cols-5 gap-4">
            <div>
              <a href="javascript:void(0)">
                <FaceBook />
              </a>
            </div>
            <div>
              <a href="javascript:void(0)">
                <InstaGram />
              </a>
            </div>
            <div>
              <a href="javascript:void(0)">
                <Mail />
              </a>
            </div>
            <div>
              <a href="javascript:void(0)">
                <LinkedIn />
              </a>
            </div>
            <div>
              <a href="javascript:void(0)">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
