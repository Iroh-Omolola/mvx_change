import { forwardRef, useRef } from "react";
import PropTypes from "prop-types";
const VideoControl = () => {
 const Controls = forwardRef(
  (
    {
     
      onPlayPause,
      playing,
    },
    ref
  ) => {
  
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    return(
         <div
              onClick={onPlayPause}
             className="bg-[#5D2A42] h-[25px] w-[25px] sm:h-[54px] sm:w-[54px] md:h-[66px] md:w-[66px] lg:h-[94px] lg:w-[94px] cursor-pointer rounded-full shadow-md"
              aria-label="play"
            >
              {playing ? (
                 <Play
                    width={50}
                    height={50}
                    className="mx-auto  mt-6 ml-6 "
                  />
              ) : (
                ""
              )}
              </div>
    )
})
Controls.propTypes = {
  onPlayPause: PropTypes.func,
}
};

export default VideoControl;
