import React from 'react'
import Feature1 from "../assets/images/feature1.png"
import Feature2 from "../assets/images/feature2.png"
import Feature3 from "../assets/images/feature3.png"
const Card = () => {
  return (
    <div className="card flex gap-5">
          <div class="relative flex flex-col  bg-white hover:border-slate-300 hover:shadow-md shadow-sm border border-slate-200 rounded-lg w-80">
            <div class="relative h-56  overflow-hidden text-white ">
              <img
             src={Feature1}   alt="card-image"
              />
            </div>
            <div class="p-4 ">
              <div className="">
                <i class="ri-star-s-fill text-yellow-400"></i>
                <i class="ri-star-s-fill  text-yellow-400"></i>
                <i class="ri-star-s-fill  text-yellow-400"></i>
                <i class="ri-star-s-fill  text-yellow-400"></i>
                <i class="ri-star-line  text-yellow-400"></i>
                <span className="ml-2 text-[10px]">5.0 (329 Reviews)</span>
              </div>
              <h6 class="mb-2 text-slate-800 text-md font-semibold">
                How to work with prototype design with adobe xd featuring tools
              </h6>
            </div>
            <div class="px-4 pb-4 pt-0 mt-2">
              <i class="ri-eye-line"></i>
              <span className="ml-2 text-gray-800 text-[12px]">
                2,538 Students watched
              </span>
            </div>
          </div>
          <div class="relative flex flex-col  bg-white hover:border-slate-300 hover:shadow-md shadow-sm border border-slate-200 rounded-lg w-80">
            <div class="relative h-56  overflow-hidden text-white ">
              <img
             src={Feature3}   alt="card-image"
              />
            </div>
            <div class="p-4 ">
              <div className="">
                <i class="ri-star-s-fill text-yellow-400"></i>
                <i class="ri-star-s-fill  text-yellow-400"></i>
                <i class="ri-star-s-fill  text-yellow-400"></i>
                <i class="ri-star-s-fill  text-yellow-400"></i>
                <i class="ri-star-line  text-yellow-400"></i>
                <span className="ml-2 text-[10px]">5.0 (329 Reviews)</span>
              </div>
              <h6 class="mb-2 text-slate-800 text-md font-semibold">
                How to work with prototype design with adobe xd featuring tools
              </h6>
            </div>
            <div class="px-4 pb-4 pt-0 mt-2">
              <i class="ri-eye-line"></i>
              <span className="ml-2 text-gray-800 text-[12px]">
                2,538 Students watched
              </span>
            </div>
          </div>
          <div class="relative flex flex-col  bg-white hover:border-slate-300 hover:shadow-md shadow-sm border border-slate-200 rounded-lg w-80">
            <div class="relative h-56  overflow-hidden text-white ">
              <img
             src={Feature2}   alt="card-image"
              />
            </div>
            <div class="p-4 ">
              <div className="">
                <i class="ri-star-s-fill text-yellow-400"></i>
                <i class="ri-star-s-fill  text-yellow-400"></i>
                <i class="ri-star-s-fill  text-yellow-400"></i>
                <i class="ri-star-s-fill  text-yellow-400"></i>
                <i class="ri-star-line  text-yellow-400"></i>
                <span className="ml-2 text-[10px]">5.0 (329 Reviews)</span>
              </div>
              <h6 class="mb-2 text-slate-800 text-md font-semibold">
                How to work with prototype design with adobe xd featuring tools
              </h6>
            </div>
            <div class="px-4 pb-4 pt-0 mt-2">
              <i class="ri-eye-line"></i>
              <span className="ml-2 text-gray-800 text-[12px]">
                2,538 Students watched
              </span>
            </div>
          </div>
        </div>
  )
}

export default Card