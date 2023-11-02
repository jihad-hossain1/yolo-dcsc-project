"use client";

import NavLink from "../navlink/Navlink";
import Link from "next/link";
import Image from "next/image";
import MobileNavBar from "./mobileNavBar/MobileNavbar";

const Navbar = () => {
  const img = "https://i.ibb.co/Zfw44yN/logo.png";

  const ongoingLink = (
    <Link
      className="bg-gradient-to-r from-[#4C6CDC] to-[#00BBC7] hover:from-[#00BBC7] hover:to-[#4C6CDC] transition duration-300 px-4 py-1 rounded-lg  hover: md:px-8 md:py-3 text-gray-50 w-fit"
      href={"/ongoingEvent"}
    >
      Ongoing event
    </Link>
  );

  const navData = (
    <>
      <li>
        <NavLink
          href="/"
          className="text-white "
          activeClassName="text-cyan-600"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          href="/allEvent"
          className="text-white "
          activeClassName="text-cyan-600"
        >
          All Event
        </NavLink>
      </li>
      <li>
        <NavLink
          href="/committee"
          className="text-white "
          activeClassName="text-cyan-600"
        >
          Committee
        </NavLink>
      </li>
      <li>
        <NavLink
          href="/gallery"
          className="text-white "
          activeClassName="text-cyan-600"
        >
          Gallery
        </NavLink>
      </li>
      <li className="md:hidden">{ongoingLink}</li>
    </>
  );

  return (
    <div className="max-w-[1280px] mx-auto md:px-2">
      {/* for desktop device  */}
      <div className="hidden md:flex justify-between items-center md:py-6 py-3 px-2 ">
        {/* dcsc logo  */}
        <div>
          <Image src={img} width={100} height={100} />
        </div>
        {/* main navlist  */}
        <ul className="flex items-center gap-10 text-xl ">{navData}</ul>
        {/* ongoing events  */}
        <div className="">{ongoingLink}</div>
      </div>
      {/* for mobile toggler  */}
      <MobileNavBar navData={navData} img={img} />
    </div>
  );
};

export default Navbar;
