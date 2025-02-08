import React from "react";
import Logo from "../assets/images/logo.png";
import Image1 from "../assets/images/image.png";
import Image2 from "../assets/images/pattern.png";
import video from "../assets/Video/video.mp4";
import { useRef, useState } from "react";

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="container relative">
      <div className="main_layout w-full h-screen flex">
        <div
          className="left w-2/3 rounded-br-2xl background_gradient h-screen flex justify-center items-center"
          style={{
            borderRadius: "0px 0px 140px 0px",
          }}
        >
          <div className="head_box  w-1/2 p-4   mt-4">
            <div className="star ">
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-line"></i>
              <span className="text-sm pl-2">
                Trusted By Over 4,322 students
              </span>
            </div>
            <div className="title mb-2">
              <h1 className="text-[48px] font-semibold">
                Learn Design with Nia Matos
              </h1>
            </div>
            <div className="sub_heading mb-5">
              Get your blood tests delivered at let home collect sample from the
              victory of the management that supplies best desing system
              guideline ever.
            </div>
            <div className="search_input mt-10">
              <div className="flex items-center w-full max-w-md p-2 bg-white rounded shadow-md border border-gray-300">
                <input
                  type="text"
                  placeholder="Search Course Name"
                  className="w-full px-4  text-gray-700 bg-transparent border-none outline-none"
                />
                <button className="p-2 text-gray-500 hover:text-gray-700">
                  <i class="ri-search-line"></i>
                </button>
              </div>
              <div className="logo mt-2">
                <img src={Logo} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="right mt-14">
          <div className="pattern_image absolute top-20 right-32">
            <img className="h-[300px] w-[300px]" src={Image2} alt="Hello" />
          </div>
          <div className="image absolute top-28 right-48 h-[450px] w-[400px]">
            <video
              ref={videoRef}
              className=" object-cover object-center w-full h-full"
              src={video}
            />
            <button
              onClick={togglePlayPause}
              className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 bg-gray-200 bg-opacity-75 text-white px-5 py-4 rounded-full"
            >
              {isPlaying ? <i className="ri-pause-line text-[20px]"></i> :<i className="ri-play-large-fill text-[20px]"></i>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
