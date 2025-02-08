import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import path from ('../../../backend/')
import { Swiper, SwiperSlide } from 'swiper/react';
import { reviewData } from "../assets/data/review"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = ({data}) => {
  console.log("data", data);
  
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
    >
        {/* {reviewData.map((item,id)=> (
             <SwiperSlide key={id}>
                 <div  class="relative flex flex-col  bg-white hover:border-slate-300 hover:shadow-md shadow-sm border border-slate-200 rounded-lg w-80">
                 <div class="relative h-56  overflow-hidden text-white ">
                   <img
                  src={item.image}   alt="card-image"
                   />
                 </div>
                 <div class="p-4 ">
                   <div className="">
                     <i class="ri-star-s-fill text-yellow-400"></i>
                     <i class="ri-star-s-fill  text-yellow-400"></i>
                     <i class="ri-star-s-fill  text-yellow-400"></i>
                     <i class="ri-star-s-fill  text-yellow-400"></i>
                     <i class="ri-star-line  text-yellow-400"></i>
                     <span className="ml-2 text-[10px]"> {item.rating} {" "}{item.reviews}</span>
                   </div>
                   <h6 class="mb-2 text-slate-800 text-md font-semibold">
                    {item.title}
                   </h6>
                 </div>
                 <div class="px-4 pb-4 pt-0 mt-2">
                   <i class="ri-eye-line"></i>
                   <span className="ml-2 text-gray-800 text-[12px]">
                    {item.studentsWatched} Students watched
                   </span>
                 </div>
               </div>
               </SwiperSlide>
              ))} */}
              {data.map((item,id)=> (
            <SwiperSlide key={id}>
            <div className="relative flex flex-col bg-white hover:border-slate-300 hover:shadow-md shadow-sm border rounded-lg w-80">
              <div className="relative h-56 overflow-hidden text-white">
              <img src={`http://localhost:4000/${item.image.replace(/\\/g, "/")}`} alt="card-image" />
              </div>
              <div className="p-4">
                {/* Star Rating System */}
                <div className="flex  items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <i
                      key={index}
                      className={`ri-star-${index < item.rating ? "fill" : "line"} text-yellow-400`}
                    ></i>
                  ))}
                  <span className="ml-2 text-[10px]">{item.rating} (382)</span>
                </div>
                <h6 className="mb-2 text-slate-800 text-md font-semibold">{item.title}</h6>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <i className="ri-eye-line"></i>
                <span className="ml-2 text-gray-800 text-[12px]">{item.studentsWatched} students watched</span>
              </div>
            </div>
          </SwiperSlide>
              ))}
    </Swiper>
  )
}

export default Slider