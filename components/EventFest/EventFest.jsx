"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// TODO for mobile responsive
import "./styles.css";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import GallaryButton from "../Gallary/GallaryButton";
import bg2 from "../../public/bg2.webp";

const EventFest = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg2.src})`,
        width: "100%",
        height: "100%",
      }}
      className="bg-no-repeat bg-cover px-2 my-10"
    >
      <div className="pt-20">
        <h2 className="font-serif font-bold text-2xl md:text-5xl uppercase text-gray-50 text-center tracking-wide mb-10">
          DCSC EVENT FEST-2023
        </h2>
        <div className="max-w-[900px] mx-auto">
          <p className="break-all text-gray-50 text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            ad sunt ducimus placeat distinctio nulla dolorem perferendis
            architecto iure cupiditate sit? Illo vel obcaecati accusamus.sit?
            Illo vel obcaecati accusamus
          </p>
        </div>
      </div>
      <div className="px-2 md:px-0 mt-10">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((itm, index) => (
            <SwiperSlide key={index}>
              <div className=" max-w-[370px] md:max-w-[460px] bg-[#1C2069] border-2 border-[#484EDB] rounded-xl p-5">
                <img
                  className="rounded-xl"
                  src="https://i.ibb.co/Qj7SJDB/c2.webp"
                  alt="slide_image"
                />
                <div className="flex items-center justify-between">
                  <div className="mt-6 pb-4 ">
                    <h4 className="text-start font-bold text-xl  font-serif text-[#FFD707] mb-5 tracking-wide">
                      DCSC Event Photography <br /> Program
                    </h4>
                    <p className="text-start text-white  md:text-xl ">
                      {`18-10-2023`} to {`20-10-2023`}
                    </p>
                  </div>
                  <Link
                    href={`/allEvent`}
                    className="bg-[#216DDE] hover:bg-[#3077e2] p-3 md:p-4 rounded-sm transition duration-300 border-l border-t"
                  >
                    <BsArrowUpRight className="text-slate-50" size={25} />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* button for slider  */}
          <GallaryButton />
        </Swiper>
      </div>
    </div>
  );
};

export default EventFest;
