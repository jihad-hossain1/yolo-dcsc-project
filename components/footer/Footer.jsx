import Image from "next/image";
import React from "react";

import { MdMail, MdOutlineFacebook } from "react-icons/md";
import { IoLogoGoogle } from "react-icons/io5";
import { BsMessenger } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import MainContainer from "../mainContainer/MainContainer";

const Footer = () => {
  return (
    <footer className="bg-[#000D37] text-gray-50 ">
      <MainContainer>
        <div className="flex flex-col items-center px-2 mt-16 md:mt-20">
          <Image
            src={"https://i.ibb.co/Zfw44yN/logo.png"}
            width={100}
            height={100}
            alt="logo"
            className="mb-4"
          />
          <h4 className="font-bold text-xl md:text-3xl font-serif mb-8">
            Dhaka College Science Club
          </h4>
          <div className="max-w-[700px] mx-auto mb-10">
            <p className="break-all text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur incidunt, maiores sit laboriosam rem recusandae itaque
              necessitatibus, praesentium corporis temporibus, illum inventore
              perferendis nemo corrupti deserunt accusamus earum.
            </p>
          </div>
          <div className="flex space-x-3 ">
            <MdOutlineFacebook className="cursor-pointer" size={25} />
            <PiInstagramLogoFill className="cursor-pointer" size={25} />
            <IoLogoGoogle className="cursor-pointer" size={25} />
            <BsMessenger className="cursor-pointer" size={23} />
            <MdMail className="cursor-pointer" size={25} />
          </div>
        </div>
        <hr className="border border-gray-50 my-8" />
        <div className="mb-10">
          <p className="text-center break-all">
            &copy; Copyright 2023, All Rights Reserved by DCSC
          </p>
          <p className="text-center">
            <span>Built By</span>{" "}
            <span className="text-[#1CC4CF]">Dev. Jihad Hossain</span>
          </p>
        </div>
      </MainContainer>
    </footer>
  );
};

export default Footer;
