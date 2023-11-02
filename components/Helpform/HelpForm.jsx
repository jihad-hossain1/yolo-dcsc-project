"use client";

import React from "react";
import bghf from "../../public/h.webp";
import MainContainer from "../mainContainer/MainContainer";
import toast from "react-hot-toast";

const HelpForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const details = form.details.value;

    const info = {
      email,
      details,
    };

    if (info) {
      toast.success("Message send Successfull");
      form.reset();
    }
  };

  // const img = require("../../public/h.webp");
  // const styling = {
  //   backgroundImage: `url('${img}')`,
  //   width: "100%",
  //   height: "100%",
  // };
  // console.log(img);

  return (
    <MainContainer>
      <div className=" mb-16 md:mb-28">
        <div
          style={{
            backgroundImage: `url(${bghf.src})`,
            width: "100%",
            height: "100%",
          }}
          className="bg-no-repeat bg-cover flex justify-center items-center border-2 border-slate-50 rounded-xl p-5 md:p-12"
        >
          <div className="relative my-12">
            <h4 className="font-serif font-bold text-xl md:text-3xl  text-gray-50 text-center tracking-wide my-16">
              Need Any help?
            </h4>
            <form
              action=""
              className="flex flex-col md:flex-row gap-4"
              onSubmit={handleSubmit}
            >
              <input
                required
                placeholder="Email"
                type="email"
                className="bg-transparent focus:outline-none border-b border-gray-50 placeholder:text-slate-50 p-2 text-gray-50"
                name="email"
                id=""
              />
              <input
                required
                placeholder="Details"
                type="text"
                className="bg-transparent focus:outline-none border-b border-gray-50 placeholder:text-slate-50 p-2 text-gray-50"
                name="details"
                id=""
              />
              <button
                className="bg-gradient-to-r from-[#4C6CDC] to-[#00BBC7] hover:from-[#00BBC7] hover:to-[#4C6CDC] transition duration-300 px-4 py-1 rounded-lg text-sm md:text-md hover: md:px-6 md:py-2 text-gray-50 w-fit"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default HelpForm;

// https://i.ibb.co/ngQTzBC/h.webp
