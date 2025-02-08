import React from 'react'
import { reviewData } from "../assets/data/review"

const Card = () => {
  console.log(reviewData)
  return (
    <div className="card flex gap-5">
      {reviewData.map((item,id)=> (
         <div key={id} class="relative flex flex-col  bg-white hover:border-slate-300 hover:shadow-md shadow-sm border border-slate-200 rounded-lg w-80">
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
      ))}
        </div>
  )
}

export default Card