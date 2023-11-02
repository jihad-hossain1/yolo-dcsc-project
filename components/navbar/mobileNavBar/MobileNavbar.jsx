"use client";

import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

export default function MobileNavBar({ navData, img }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="md:hidden sticky z-10  flex justify-between items-center bg-black/20">
      <div>
        <Image src={img} width={70} height={70} />
      </div>
      <div className="text-right">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
              {toggle ? (
                <RxCross2 onClick={() => setToggle(!toggle)} size={30} />
              ) : (
                <GiHamburgerMenu onClick={() => setToggle(!toggle)} size={30} />
              )}
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 ml-2 mt-2 w-screen origin-top-right divide-y divide-gray-100 rounded-md bg-blue-950 shadow-lg ring-1 ring-black/5 focus:outline-none">
              <ul className="text-center space-y-5 py-4">{navData}</ul>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
