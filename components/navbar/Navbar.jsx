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
            className="py-2 px-6 rounded-md text-slate-50 bg-gradient-to-r from-[#4C6CDC] to-[#00BBC7]"
            href={"#"}
            // style={{
            //   background:
            //     "linear-gradient(93deg, #4C6CDC 9.22%, #00BBC7 99.52%)",
            // }}
          >
            Ongoing event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
