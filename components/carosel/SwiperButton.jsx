import React from "react";
import { useSwiper } from "swiper/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const SwiperButton = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className="swiper-nav-btns flex justify-between  px-10 md:px-20 fixed z-10 -mt-36 lg:-mt-44">
        <button
          className="text-slate-50  text-3xl rounded-md border border-slate-50 px-6 py-1"
          onClick={() => swiper.slidePrev()}
        >
          <BsArrowLeft />
        </button>
      </div>
      <div className="swiper-nav-btns flex justify-between -mt-36 lg:-mt-44 px-10 md:px-20 fixed z-10 right-0">
        <button
          className="text-slate-50 text-3xl rounded-md border border-slate-50 px-4 py-1"
          onClick={() => swiper.slideNext()}
        >
          <BsArrowRight />
        </button>
      </div>
    </>
  );
};

export default SwiperButton;
