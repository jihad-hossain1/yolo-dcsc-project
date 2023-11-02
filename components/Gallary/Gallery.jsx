"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// const newSwip = new Swiper();
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./stylesS.css";

// import required modules
import { Grid, Pagination } from "swiper/modules";
import { caroselOneData } from "@/data/caroselData";
import MainContainer from "../mainContainer/MainContainer";
import GallaryButton from "./GallaryButton";

const Gallery = () => {
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
    <MainContainer>
      <div className="mt-20 md:mt-28 ">
        <div>
          <div>
            <h2 className="font-serif font-bold text-2xl md:text-5xl  text-gray-50 text-center tracking-wide mb-10">
              Gallery
            </h2>
            <div className="max-w-[900px] mx-auto">
              <p className="break-all text-gray-50 text-center ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, ad sunt ducimus placeat distinctio nulla dolorem
                perferendis architecto iure cupiditate sit? Illo vel obcaecati
                accusamus.sit? Illo vel obcaecati accusamus
              </p>
            </div>
          </div>
          {/* Gallary slider  */}
          <div className="mt-12">
            <div>
              <Swiper
                // grid={{
                //   rows: 2,
                // }}
                slidesPerView={slides}
                spaceBetween={30}
                modules={[Pagination, Grid]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className=" ">
                    <img
                      className="rounded-lg object-cover "
                      src="https://i.ibb.co/YbPwxTy/c-3.webp"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" ">
                    <img
                      className="rounded-lg object-cover "
                      src="https://i.ibb.co/YbPwxTy/c-3.webp"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" ">
                    <img
                      className="rounded-lg object-cover "
                      src="https://i.ibb.co/YbPwxTy/c-3.webp"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" ">
                    <img
                      className="rounded-lg object-cover "
                      src="https://i.ibb.co/YbPwxTy/c-3.webp"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" ">
                    <img
                      className="rounded-lg object-cover "
                      src="https://i.ibb.co/YbPwxTy/c-3.webp"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" ">
                    <img
                      className="rounded-lg object-cover "
                      src="https://i.ibb.co/YbPwxTy/c-3.webp"
                      alt=""
                    />
                  </div>
                </SwiperSlide>

                <div className="">
                  <GallaryButton />
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Gallery;