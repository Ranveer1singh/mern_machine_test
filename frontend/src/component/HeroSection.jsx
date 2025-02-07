import React from "react";
import Image1 from "../assets/images/image.png";
import Image2 from "../assets/images/pattern.png";
import Logo from "../assets/images/logo.png"
const HeroSection = () => {
  return (
    <div className="container w-full h-screen  background_gradient ">
      <div className=" grid  grid-cols-2 pt-4 ">
        <div className="left_section   flex flex-col justify-center items-center pt-5">
          <div className="head_box  w-1/2 p-4   mt-4">
            <div className="star ">
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-line"></i>
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
            <div className="search_input mt-5">
              <div class="w-full max-w-sm min-w-[200px]">
                <div class="relative">
                  <input
                    type="email"
                    class="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Search Course here.."
                  />
                  <button
                    class="absolute right-1 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="logo mt-2">
                <img src={Logo} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="right_section mt-14">
          <div className="image ">
            <img className=" h-[500] w-[450px]" src={Image1} alt="Hello" />
            {/* <img className="h-[300px] w-[300px]" src={Image2} alt="Hello" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
