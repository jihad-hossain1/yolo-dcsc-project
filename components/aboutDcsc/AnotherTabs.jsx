"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AnotherTabs() {
  let [categories] = useState({
    About: [
      {
        id: 1,
        title:
          "Dhaka College Science Club, established in 1996, is a pioneerin institution dedicated to fostering scientific curiosity and exploration. With over two decades of nurturing young minds, our club has been a hub for students to delve into various scientific disciplines. Through engaging activities, lectures, and experiments, we empower members to develop critical thinking skills and a profound appreciation for the world of science. Our enduring legacy continues to inspire the next generation of scientists and innovators in Dhaka and beyond.",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
    ],
    Intro: [
      {
        id: 1,
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quasi quaerat dolore aspernatur. Quo, ad, aspernatur saepe maiores distinctio alias sequi adipisci voluptas voluptaterepudiandae delectus eligendi dolore optio consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quasi quaerat dolore aspernatur. Quo, ad, aspernatur saepe maioresdistinctio alias sequi adipisci voluptas voluptate repudiandae delectus eligendi dolore optio consequatur.",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
    ],
    What: [
      {
        id: 1,
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quasi quaerat dolore aspernatur. Quo, ad, aspernatur saepe maiores distinctio alias sequi adipisci voluptas voluptaterepudiandae delectus eligendi dolore optio consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quasi quaerat dolore aspernatur. Quo, ad, aspernatur saepe maioresdistinctio alias sequi adipisci voluptas voluptate repudiandae delectus eligendi dolore optio consequatur.",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
    ],
  });

  return (
    <div className="w-full sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-50 p-2">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-3  font-semibold font-serif  text-gray-50",
                  "ring-blue-100/60 ",
                  selected
                    ? "bg-gradient-to-r from-[#4C6CDC] to-[#00BBC7] shadow"
                    : "text-gray-950 hover:bg-white/[0.12] "
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames("rounded-xl bg-transparent p-3", "")}
            >
              <ul>
                {posts.map((post) => (
                  <li key={post.id} className="relative rounded-md ">
                    <h3 className="break-all">{post.title}</h3>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
