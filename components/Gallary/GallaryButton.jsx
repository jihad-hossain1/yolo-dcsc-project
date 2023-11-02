import React from "react";
import { useSwiper } from "swiper/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const GallaryButton = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className="swiper-nav-btns flex justify-center space-x-6 mt-10  ">
        <button
          className="text-slate-50  text-3xl rounded-md border border-slate-50 px-6 py-1"
          onClick={() => swiper.slidePrev()}
        >
          <BsArrowLeft />
        </button>
        <button
          className="text-slate-50  text-3xl rounded-md border border-slate-50 px-6 py-1"
          onClick={() => swiper.slideNext()}
        >
          <BsArrowRight />
        </button>
      </div>
    </>
  );
};

export default GallaryButton;
