import EventFest from "@/components/EventFest/EventFest";
import Gallery from "@/components/Gallary/Gallery";
import HelpForm from "@/components/Helpform/HelpForm";
import AboutDcsc from "@/components/aboutDcsc/AboutDcsc";
import CaroselOne from "@/components/carosel/CaroselOne";
import Committee from "@/components/committee/Committee";
import React from "react";
import bg1 from "../../public/bg1.webp";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg1.src})`,
        width: "100%",
        height: "100%",
      }}
      className="bg-no-repeat bg-contain "
    >
      <div>
        <h2 className="my-6 md:my-10 text-2xl md:text-4xl lg:text-7xl font-extrabold uppercase text-slate-50 text-center font-serif leading-8 md:leading-10 flex flex-col tracking-wide">
          <span>Dhaka Collage</span> <span> Science Club</span>
        </h2>

        {/* Carosel One  */}
        <div className="my-20 ">
          <CaroselOne />
        </div>

        {/* about dcsc section  */}
        <div className="md:my-20 md:py-10">
          <AboutDcsc />
        </div>

        {/* event fest slider */}
        <div className="md:py-20">
          <EventFest />
        </div>

        {/* Gallery home slider  */}
        <Gallery />

        {/* Commetie card  */}
        <Committee />

        {/* help section  */}
        <HelpForm />
      </div>
    </div>
  );
};

export default Home;
