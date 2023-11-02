import React from "react";
import MainContainer from "../mainContainer/MainContainer";
import AboutTabs from "./AboutTabs";

const AboutDcsc = () => {
  return (
    <div className="pb-10 md:pb-20">
      <MainContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[70px] ">
          <div className="text-slate-50">
            <h4 className="font-serif font-bold text-2xl uppercase mb-6">
              dcsc
            </h4>
            <div>
              <AboutTabs />
            </div>
          </div>

          <div className="p-4 md:p-0">
            <img
              className="object-cover  rounded-xl shadow-sm -skew-x-6 -skew-y-[4deg]"
              src="https://i.ibb.co/5vR3JzG/ab.webp"
              alt=""
            />
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default AboutDcsc;
