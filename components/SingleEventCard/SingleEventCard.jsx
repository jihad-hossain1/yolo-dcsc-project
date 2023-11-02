import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const SingleEventCard = ({ itm }) => {
  const { title, img, date } = itm;
  return (
    <div>
      <div className=" bg-[#1C2069] border-2 border-[#484EDB] rounded-xl p-5">
        <img className="rounded-xl" src={img} alt="slide_image" />
        <div className="flex items-center justify-between">
          <div className="mt-6 pb-4 ">
            <h4 className="font-bold text-xl font-serif text-[#FFD707] mb-5 tracking-wide">
              {title}
            </h4>
            <p className="text-white ">
              {date?.start} to {date?.end}
            </p>
          </div>
          <Link
            href={`#`}
            className="bg-[#216DDE] hover:bg-[#3077e2] p-3  rounded-sm transition duration-300 border-l border-t"
          >
            <BsArrowUpRight className="text-slate-50" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleEventCard;
