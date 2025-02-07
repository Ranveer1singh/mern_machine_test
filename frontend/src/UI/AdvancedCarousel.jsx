import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/autoplay'
import { EffectCoverflow, Pagination,Autoplay ,  Navigation} from "swiper/modules";
import Feature1 from "../assets/images/feature1.png"
import Feature2 from "../assets/images/feature2.png"
import Feature3 from "../assets/images/feature3.png"

export default function AdvancedCarousel() {
  const slides = [
    { img: Feature1,  description: "How to work with prototype design with adobe xd featuring tools" },
    { img: Feature2, description: "How to work with prototype design with adobe xd featuring tools" },
    { img: Feature3, description: "How to work with prototype design with adobe xd featuring tools" },
  ];

  return (
    <div className="overflow-hidden">
    <Swiper
    effect="coverflow"
    // navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}

    grabCursor={true}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    centeredSlides={true}
    slidesPerView={2} // Allows next and previous cards to be partially visible
    loop={true}
    coverflowEffect={{
      rotate: 0,
      stretch: -50, // Negative brings slides closer together
      depth: 200, // Depth effect for stacking
      modifier: 1.5,
      slideShadows: false,
    }}
    // pagination={{ clickable: true }}
    modules={[EffectCoverflow, Pagination,Autoplay,Navigation]}
    className="w-full max-w-lg"
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index} className="w-64 h-72">
        <div class="relative flex flex-col  bg-white hover:border-slate-300 hover:shadow-md shadow-sm border border-slate-200 rounded-lg w-80">
                   <div class="relative h-56  overflow-hidden text-white ">
                     <img
                    src={slide.img}   alt="card-image"
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
                      {slide.description}
                     </h6>
                   </div>
                   <div class="px-4 pb-4 pt-0 mt-2">
                     <i class="ri-eye-line"></i>
                     <span className="ml-2 text-gray-800 text-[12px]">
                       2,538 Students watched
                     </span>
                   </div>
                 </div>
      </SwiperSlide>
    ))}
  </Swiper>
  </div>
  );
}
