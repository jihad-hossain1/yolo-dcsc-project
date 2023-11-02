import Link from "next/link";
import React from "react";

const SingleCommitteeCard = ({ itm }) => {
  const { img, name, position } = itm;
  return (
    <Link href={`/committee`} className=" rounded-xl bg-[#100228] ">
      <div className="relative">
        <img src={img} className=" object-cover rounded-md" alt="" />
        <div className="h-full rounded-b-xl bg-gradient-to-b from-[#0a223800] from-10% to-[#1E65A7] ">
          <div className="p-3">
            <h4 className="font-serif font-semibold text-xl text-slate-50 mb-3">
              {name}
            </h4>
            <p className="break-all text-[#1ED2DD] mb-3">{position}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleCommitteeCard;
