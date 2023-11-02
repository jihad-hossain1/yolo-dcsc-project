import SingleGalleryCard from "@/components/SingleGalleryCard/SingleGalleryCard";
import MainContainer from "@/components/mainContainer/MainContainer";
import { galleryData } from "@/data/galleryData";
import React from "react";

const GallaryPage = () => {
  return (
    <>
      <MainContainer>
        <div className="mt-16 mb-20">
          <h2 className="font-serif font-bold text-2xl md:text-5xl  text-gray-50 text-center tracking-wide mb-10">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7">
            {galleryData?.map((itm) => (
              <SingleGalleryCard itm={itm} key={itm?.id} />
            ))}
          </div>
          <div className="text-center mt-8 md:mt-12">
            <button className="bg-gradient-to-r from-[#4C6CDC] to-[#00BBC7] hover:from-[#00BBC7] hover:to-[#4C6CDC] transition duration-300 px-6 py-2 rounded-lg  hover: md:px-8 md:py-3 text-gray-50 w-fit">
              Load More
            </button>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default GallaryPage;
