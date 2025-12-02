"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Slideshow() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3500 }}
      loop={true}
      className="w-full h-[400px] md:h-[550px] rounded-2xl overflow-hidden shadow-xl"
    >

      {/* Slide 1 */}
      <SwiperSlide>
        <img
          src="/slide1.jpg"
          className="w-full h-full object-cover"
          alt="Reinigung"
        />
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <img
          src="/slide2.jpg"
          className="w-full h-full object-cover"
          alt="Sauberkeit"
        />
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <img
          src="/slide3.jpg"
          className="w-full h-full object-cover"
          alt="Professionalität"
        />
      </SwiperSlide>

    </Swiper>
  );
}
