import EventFest from "@/components/EventFest/EventFest";
import AboutDcsc from "@/components/aboutDcsc/AboutDcsc";
import CaroselOne from "@/components/carosel/CaroselOne";
import React from "react";

const Home = () => {
  return (
    <div>
      <div>
        <h2 className="my-6 md:my-10 text-2xl md:text-4xl lg:text-7xl font-extrabold uppercase text-slate-50 text-center font-serif leading-8 md:leading-10 flex flex-col tracking-wide">
          <span>Dhaka Collage</span> <span> Science Club</span>
        </h2>
        {/* Carosel One  */}
        <div className="my-20 ">
          <CaroselOne />
        </div>
        {/* about dcsc section  */}
        <AboutDcsc />
        {/* event fest  */}
        <EventFest />
      </div>
    </div>
  );
};

export default Home;
