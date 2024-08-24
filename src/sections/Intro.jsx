import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import { meal } from "@/constants/index";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(true);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo(!playVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <section className="lg:h-screen mt-10 md:mt-0 relative w-full">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        autoPlay
        loop
        muted
        controls={false}
        className="object-contain h-full w-full"
      ></video>
      <div className="h-full w-full flex items-center justify-center absolute inset-0 opacity-50 bg-black z-50">
        <div
          className="w-[60px] h-[60px] border-2 border-golden rounded-full flex items-center justify-center cursor-pointer"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill size={48}></BsPauseFill>
          ) : (
            <BsFillPlayFill size={48}></BsFillPlayFill>
          )}
        </div>
      </div>
    </section>
  );
};

export default Intro;
