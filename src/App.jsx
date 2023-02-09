import { useState, useEffect } from "react";
import { BiChevronRight } from "react-icons/bi";
import { Play} from "./assets/svgs";
import {
  WithoutIcon,
  SideBar,
  ChatIcon,
  ScrollIcon,
  WithIcon,
  Rating,
  NavBar,
  Footer,
  ScrollIconTwo,
} from "./components";
import { VideoPlayer } from "./components/video/videoPlayer";
const App = () => {
   const [showTopBtn, setShowTopBtn] = useState(false);
   useEffect(() => {
     window.addEventListener("scroll", () => {
       if (window.scrollY > 200) {
         setShowTopBtn(true);
       } else {
         setShowTopBtn(false);
       }
     });
   }, []);
   const scrollToTop = () => {
     window.scrollTo({
       top: 0,
       behavior: "smooth"
     });
   };
   const scrollToBottom = () => {
     window.scrollTo({
       top: document.documentElement.scrollHeight,
       behavior: "smooth",
     });
   };

   const [nav, setNav] = useState(false);
   const [serviceNav, setServiceNav] = useState(false);

  return (
    <>
      <div className="bg-[white] mb-[104px]">
        <div className="absolute w-full h-[800px]  flex justify-end">
          <div className="relative h-full w-[50%] z-40">
            <div className="relative h-full w-full flex justify-end">
              <object
                data="./src/assets/Subtract.svg"
                className="lg:h-[1000px] lg:w-[800px] lg:-mt-[110px] h-[700px] w-[441px]"
                alt="bg-image"
                srcset=""
              />
            </div>
          </div>
        </div>
        <div className="fixed  font-mon  z-50 w-full lg:pt-2 pb-4">
          <div className="mx-auto min-h-[60px] lg:-mt-2 lg:min-h-[92px] px-5 lg:px-[30px] lg:rounded-[20px] lg:w-[87%] font-mon bg-white lg:bg-navWhite lg:backdrop-blur-[20px] flex items-center">
            <NavBar hasSet={(e) => setNav(e)} />
          </div>
        </div>
        <div className="relative  mx-auto lg:my-2 w-[95%]  overflow-hidden rounded-[10px] bg-bannerLight">
          <div className="w-full  mx-auto relative h-auto md:h-auto">
            <div className="flex md:h-auto mt-[35px] lg:mt-[150px] w-full">
              <div className="flex h-auto  w-full  mb-11 sm:pt-[80px] items-end pt-[50px] mt-[60px]">
                <div className="flex flex-col gap-6 px-[15px] md:px-[70px] lg:px-[140px]">
                  <h1 className="text-[38px]  lg:text-[70px] whitespace-nowrap text-text_primary font-catalina mb-3 font-normal leading-[60px] md:leading-[80px]">
                    Access <span className="text-blue">Fast Finance</span>{" "}
                    <br /> and{" "}
                    <span className="text-banner">Easy Shipping</span> <br />{" "}
                    Around The World
                  </h1>
                  <p className="font-mon font-normal lg:font-medium  w-[107%] leading-[28px] pr-9 sm:pr-[350px] md:pr-0 lg:pr-0  md:leading-[30px]  text-text_primary text-[14px] lg:text-[16px]">
                    MVX offers you freight financing, frieght tracking, door to
                    door shipping and more, all at the tip of your fingers. We
                    eliminate the headache of global shipping for you.
                  </p>
                  <div className="flex justify-between md:justify-start pr-9 sm:pr-[430px] md:pr-0 lg:pr-0">
                    <WithoutIcon title={"Move Cargo"} />
                    <div className="flex mt-6 whitespace-nowrap text-blue  hover:text-gray-500">
                      <WithIcon
                        title={"Get Financed"}
                        icon={<BiChevronRight className="text-[22px] mt-1" />}
                      />
                    </div>
                  </div>
                </div>
                <ScrollIconTwo onClick={scrollToBottom} />
              </div>
            </div>
          </div>
          <div className="lg:py-12 py-2"></div>
          <div className="w-full px-[15px] md:px-[70px] lg:px-[140px] mx-auto ">
            <VideoPlayer />
            <Rating />
          </div>
        </div>

        <div>
          <ChatIcon />
          {showTopBtn && <ScrollIcon onClick={scrollToTop} />}
        </div>
      </div>
      <div className="border border-bannerBlueLight min-h-[800px] w-full bg-bannerBlueLight">
        <Footer />
      </div>
      <SideBar open={nav} hasService={(e) => setServiceNav(e)} />
    </>
  );
};
export default App;
