import SingleCommitteeCard from "@/components/committee/SingleCommitteeCard";
import MainContainer from "@/components/mainContainer/MainContainer";
import { committeData } from "@/data/committeeData";
import React from "react";

const CommitteePage = () => {
  return (
    <div>
      <div className="my-10 md:my-24">
        <div>
          <div className="px-2">
            <h2 className="font-serif font-bold text-2xl md:text-5xl  text-gray-50 text-center tracking-wide mb-10">
              Executive Committee 2023
            </h2>
            <div className="max-w-[900px] mx-auto">
              <p className="break-all text-gray-50 text-center ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, ad sunt ducimus placeat distinctio nulla dolorem
                perferendis architecto iure cupiditate sit? Illo vel obcaecati
                accusamus.sit? Illo vel obcaecati accusamus
              </p>
            </div>
          </div>
          <MainContainer>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-10 my-10 md:my-20">
              {committeData?.map((itm) => (
                <SingleCommitteeCard key={itm?._id} itm={itm} />
              ))}
            </div>
            <div className="text-center mt-8 md:mt-12">
              <button className="bg-gradient-to-r from-[#4C6CDC] to-[#00BBC7] hover:from-[#00BBC7] hover:to-[#4C6CDC] transition duration-300 px-6 py-2 rounded-lg  hover: md:px-8 md:py-3 text-gray-50 w-fit">
                Load More
              </button>
            </div>
          </MainContainer>
        </div>
      </div>
    </div>
  );
};

export default CommitteePage;
