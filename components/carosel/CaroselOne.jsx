"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { A11y, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "./styles.css";
import { caroselOneData } from "@/data/caroselData";
import SwiperButton from "./SwiperButton";

const CaroselOne = () => {
  const [slides, setSlides] = useState(0);
  const setSlidesPerview = () => {
    setSlides(
      window.innerWidth <= 550
        ? 1
        : window.innerWidth <= 720
        ? 2
        : window.innerWidth > 720
        ? 3
        : 0
    );
  };

  useEffect(() => {
    setSlidesPerview();
    window.addEventListener("resize", setSlidesPerview);
    return () => {
      window.removeEventListener("resize", setSlidesPerview);
    };
  }, []);

  return (
    <div className="mt-12">
      <div>
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={slides}
          className="mySwiper relative"
          spaceBetween={30}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          //   navigation={true}
        >
          {caroselOneData?.map((itm) => (
            <SwiperSlide className="" key={itm?.id}>
              <div className=" shadow-sm ">
                <img
                  className="rounded-lg object-cover "
                  src={itm?.img}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
          <div className="">{/* <SwiperButton /> */}</div>
        </Swiper>
      </div>
    </div>
  );
};

export default CaroselOne;
