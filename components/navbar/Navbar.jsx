import React from "react";
import NavLink from "../navlink/Navlink";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-2">
      <div className="hidden md:flex justify-between items-center md:py-6 py-3 px-2 ">
        {/* dcsc logo  */}
        <div>
          <Image
            src={"https://i.ibb.co/Zfw44yN/logo.png"}
            width={100}
            height={100}
          />
        </div>
        {/* main navlist  */}
        <ul className="flex items-center gap-10 text-xl ">
          <li>
            <NavLink
              href="/"
              className="text-white "
              activeClassName="text-cyan-400"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/allEvent"
              className="text-white "
              activeClassName="text-cyan-500"
            >
              All Event
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/committee"
              className="text-white "
              activeClassName="text-cyan-500"
            >
              Committee
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/gallery"
              className="text-white "
              activeClassName="text-cyan-500"
            >
              Gallery
            </NavLink>
          </li>
        </ul>
        {/* ongoing events  */}
        <div>
          <Link
            className="bg-gradient-to-r from-[#4C6CDC] to-[#00BBC7] hover:from-[#00BBC7] hover:to-[#4C6CDC] transition duration-300 px-4 py-1 rounded-lg  hover: md:px-8 md:py-3 text-gray-50 w-fit"
            href={"#"}
          >
            Ongoing event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
