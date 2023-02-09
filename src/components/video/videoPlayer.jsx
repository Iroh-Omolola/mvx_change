import { useState, useEffect, useRef } from "react";
import { Play } from "../../assets/svgs";
import { BsFillPauseFill } from "react-icons/bs";
export const VideoPlayer = () => {
     const[playing, setPlaying]=useState(false)

     var v = document.getElementsByTagName("video")[0];
     
   useEffect(()=>{
     if(playing===true){
      v?.play();
     }
     else{
      v?.pause();
     }
   },[playing])
 
  return (
    <div className="w-full ">
      <video
        poster="../src/assets/Group 3106.svg"
        id="video"
        width="100%"
      >
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
          width="100%"
        />
      </video>
      <div className="flex absolute w-full  md:w-[83%] bottom-[35%] sm:bottom-[400px]  md:bottom-[30%]  lg:bottom-[30%]">
        <div className="flex bg-[#5D2A42] mx-auto  z-40 h-[25px] w-[25px] sm:h-[54px] sm:w-[54px] md:h-[66px] md:w-[66px] lg:h-[94px] lg:w-[94px] cursor-pointer rounded-full shadow-md">
          <div className="sm:hidden text-white  md:hidden lg:hidden">
            {playing ? (
              <BsFillPauseFill
                className="text-[15px] ml-[5px] mt-[4px]"
                onClick={() => setPlaying(false)}
              />
            ) : (
              <Play
                onClick={() => setPlaying(true)}
                width={12}
                height={12}
                className="play-button mx-auto mt-1.5 ml-2"
              />
            )}
          </div>
          <div className="hidden sm:block text-white   md:hidden lg:hidden">
            {playing ? (
              <BsFillPauseFill
                className="text-[40px] ml-[7px] mt-[8px]"
                onClick={() => setPlaying(false)}
              />
            ) : (
              <Play
                onClick={() => setPlaying(true)}
                width={25}
                height={25}
                className="mx-auto mt-4 ml-4"
              />
            )}
          </div>
          <div className="hidden play-button sm:hidden text-white md:hidden  lg:block">
            {playing ? (
              <BsFillPauseFill
                className="text-[60px] ml-[18px] mt-[17px]"
                onClick={() => setPlaying(false)}
              />
            ) : (
              <Play
                onClick={() => setPlaying(true)}
                width={50}
                height={50}
                className="mx-auto  mt-5 ml-[23px] "
              />
            )}
          </div>
          <div className="hidden play-button sm:hidden text-white   md:block lg:hidden">
            {playing ? (
              <BsFillPauseFill
                className="text-[40px] ml-[12px] mt-[15px]"
                onClick={() => setPlaying(false)}
              />
            ) : (
              <Play
                onClick={() => setPlaying(true)}
                width={35}
                height={35}
                className="mx-auto  mt-[15px] ml-5"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

