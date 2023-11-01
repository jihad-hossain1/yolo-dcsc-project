"use client";

import { tabsData } from "@/data/tabsData";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AboutTabs = () => {
  return (
    <div>
      <Tabs>
        <TabList
          className={"bg-slate-50 gap-4 w-fit rounded-md flex items-center p-3"}
        >
          <Tab className={"bg-transparent"}>
            <button
              className="py-2 px-6 rounded-md text-slate-50 bg-gradient-to-r from-[#4C6CDC] to-[#00BBC7]"
              href={"#"}
            >
              About
            </button>
          </Tab>
          <Tab className={"bg-transparent"}>
            <button
              className="py-2 px-6 rounded-md text-slate-50 bg-gradient-to-r from-[#4C6CDC] to-[#00BBC7]"
              href={"#"}
            >
              Intro
            </button>
          </Tab>
          <Tab className={"bg-transparent"}>
            <button
              className="py-2 px-6 rounded-md text-slate-50 bg-gradient-to-r from-[#4C6CDC] to-[#00BBC7]"
              href={"#"}
            >
              What we do
            </button>
          </Tab>
        </TabList>
        {tabsData?.map(({ about, title, value }) => (
          <div key={value} className="mt-4">
            <TabPanel>
              <p className="break-all">{about}</p>
            </TabPanel>
          </div>
        ))}
      </Tabs>
    </div>
  );
};

export default AboutTabs;
