"use client";

import { tabsData } from "@/data/tabsData";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AboutTabs = () => {
  return (
    <>
      <div className="overflow-auto">
        <Tabs>
          <TabList className="flex justify-between bg-gray-100 w-full text-gray-900 p-2 rounded-lg">
            <Tab className="font-bold cursor-pointer py-1 px-3 md:py-3 md:px-8 bg-grey-background ">
              About
            </Tab>
            <Tab className="font-bold cursor-pointer  py-1 px-3 md:py-3 md:px-8  bg-grey-background ">
              Intro
            </Tab>
            <Tab className="font-bold cursor-pointer  py-1 px-3 md:py-3 md:px-8 bg-grey-background ">
              What we do
            </Tab>
          </TabList>

          <TabPanel className="overflow-hidden">
            <div className="mt-5 md:mt-8 ">
              <p className="break-all">
                Dhaka College Science Club, established in 1996, is a pioneering
                institution dedicated to fostering scientific curiosity and
                exploration. With over two decades of nurturing young minds, our
                club has been a hub for students to delve into various
                scientific disciplines. Through engaging activities, lectures,
                and experiments, we empower members to develop critical thinking
                skills and a profound appreciation for the world of science. Our
                enduring legacy continues to inspire the next generation of
                scientists and innovators in Dhaka and beyond.
              </p>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-5 md:mt-8 ">
              <p className="break-all">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                quasi quaerat dolore aspernatur. Quo, ad, aspernatur saepe
                maiores distinctio alias sequi adipisci voluptas voluptate
                repudiandae delectus eligendi dolore optio consequatur. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Est quasi
                quaerat dolore aspernatur. Quo, ad, aspernatur saepe maiores
                distinctio alias sequi adipisci voluptas voluptate repudiandae
                delectus eligendi dolore optio consequatur.
              </p>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-5 md:mt-8 ">
              <p className="break-all">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque maxime repudiandae, voluptas sequi eveniet quaerat
                dolorum blanditiis ducimus est! Dolores omnis deleniti eos unde
                expedita vero hic, recusandae nesciunt voluptatibus similique?
                Sed sit libero omnis laboriosam consequatur autem, nostrum
                consectetur. Ab explicabo similique soluta id eligendi itaque!
                Minima reprehenderit ratione eaque nostrum quia, ex laborum a
                cupiditate dolores? Temporibus eius totam nesciunt itaque neque
                assumenda tenetur, quisquam veritatis delectus quas laboriosam
                illum ipsum laudantium at possimus voluptatem quaerat obcaecati,
                ab beatae. Maxime ullam repudiandae autem quasi debitis
                molestiae laboriosam reiciendis quos laborum, culpa vel velit
                dicta fuga modi doloremque odio!
              </p>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default AboutTabs;

