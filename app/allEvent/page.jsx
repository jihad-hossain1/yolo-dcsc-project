import SingleEventCard from "@/components/SingleEventCard/SingleEventCard";
import MainContainer from "@/components/mainContainer/MainContainer";
import { allEventDatas } from "@/data/allEventData";
import React from "react";

const AllEventPage = () => {
  return (
    <MainContainer>
      <div className="my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {allEventDatas?.map((itm, index) => (
            <SingleEventCard key={index} itm={itm} />
          ))}
        </div>
      </div>
    </MainContainer>
  );
};

export default AllEventPage;
