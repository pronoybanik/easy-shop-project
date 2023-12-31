
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import mainSlider from "@/data/mainSlider";
import { Autoplay, EffectFade, Navigation } from "swiper";
import SingleHeroSlider from "./SingleHeroSlider";
import "swiper/css/bundle";


const HeroSlider = () => {
  return (
    <section className="main-slider">
      <Swiper
        slidesPerView={1}
        loop
        navigation
        effect="fade"
        autoplay
        zoom
        modules={[Navigation, EffectFade, Autoplay]}
      >
        {mainSlider.map((slider) => (
          <SwiperSlide key={slider.id}>
            <SingleHeroSlider slider={slider} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
