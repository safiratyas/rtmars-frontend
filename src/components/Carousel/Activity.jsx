import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Activity.scss"

function Activity() {
  return (
    <>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/contoh-header.png'} className="mb-2" alt="header" style={{ height: "600px" }}
          /></SwiperSlide>
          <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/contoh-header.png'} className="mb-2" alt="header" style={{ height: "600px" }}
          /></SwiperSlide>
          <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/contoh-header.png'} className="mb-2" alt="header" style={{ height: "600px" }}
          /></SwiperSlide>
          <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/contoh-header.png'} className="mb-2" alt="header" style={{ height: "600px" }}
          /></SwiperSlide>
          <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/contoh-header.png'} className="mb-2" alt="header" style={{ height: "600px" }}
          /></SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Activity;