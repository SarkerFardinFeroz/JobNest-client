import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import SwiperTesti from "../Swiper/SwiperTesti";



const Testimonial = () => {
    
  return (
    <div className={`  mt-[-93px]  `}>
      <Swiper
      
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
       
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
         <SwiperSlide >
            <SwiperTesti/>
          </SwiperSlide>
         <SwiperSlide >
            <SwiperTesti/>
          </SwiperSlide>
         <SwiperSlide >
            <SwiperTesti/>
          </SwiperSlide>
         <SwiperSlide >
            <SwiperTesti/>
          </SwiperSlide>
         <SwiperSlide >
            <SwiperTesti/>
          </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
