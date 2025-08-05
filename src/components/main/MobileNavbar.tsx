"use client";
import { Menu, Plus } from "lucide-react";
import logo from "../../../public/Picture1.png";
import Image from "next/image";
import Link from "next/link";
import { servicesList } from "./CoreServices";
import { ServicesLocations } from "../../../List";
export const MobileNavbar = () => {
  return (
    <header className="fixed z-50 top-0 left-0 w-full px-3 py-4 bg-white">
      <nav className="flex items-center justify-between">
        <div id="company-logo" className="w-40 h-9 bg-white relative">
          <Link title="Home Page" href="/">
            {" "}
            <Image
              alt="Nice Movers Company Logo"
              src={logo}
              loading="eager"
              priority
              className="object-contain object-center absolute mt-0.5"
              quality={90}
            />
          </Link>
        </div>

        <input type="checkbox" id="menu-toggle" className="peer hidden" />
        <label
          htmlFor="menu-toggle"
          className="flex items-center gap-x-2  py-2 px-2.5 rounded-md b-red-bg b-white"
        >
          {" "}
          <Menu size={25} />
        </label>

        <Sidebar />
      </nav>
    </header>
  );
};

const Sidebar = () => {
  const closeSidebar = () => {
    const checkbox = document.getElementById("menu-toggle") as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };
  return (
    <div className="sidebar scrollbar-thin scrollbar-thumb-accent scrollbar-track-primary">
      {/* Close Button */}
      <label
        htmlFor="menu-toggle"
        className="absolute top-3 right-4 text-xl cursor-pointer"
      >
        <span className="text-2xl">✖</span>
      </label>

      <ul className="w-full px-5 mt-[70px] text-lg">
        {/* SERVICES DROPDOWN */}
        <li className="border-b border-[#e7e6e6] mb-2">
          <input type="checkbox" id="services-toggle" className="peer hidden" />
          <label
            htmlFor="services-toggle"
            className="flex items-center justify-between w-full pl-4 py-2 cursor-pointer"
          >
            <span>Services</span>
            <Plus className="transition-transform peer-checked:rotate-45" />
          </label>
          <DropDown
            list={servicesList.map((ser) => {
              return {
                link: ser.link,
                title: ser.title,
              };
            })}
          />
        </li>

        {/* LOCATIONS DROPDOWN */}
        <li className="border-b border-[#e7e6e6] mb-2">
          <input
            type="checkbox"
            id="locations-toggle"
            className="peer hidden"
          />
          <label
            htmlFor="locations-toggle"
            className="flex items-center justify-between w-full pl-4 py-2 cursor-pointer"
          >
            <span>Movers And Packers</span>
            <Plus className="transition-transform peer-checked:rotate-45" />
          </label>
          <DropDown
            list={ServicesLocations.map((loc) => {
              return {
                link: loc.link,
                title: loc.title,
              };
            })}
          />
        </li>

        {/* OTHER LINKS */}
        <li className="border-b border-[#e7e6e6] mb-2 pl-4 py-2">
          <Link onClick={closeSidebar} href={"/about-us"}>
            About Us
          </Link>
        </li>
        <li className="border-b border-[#e7e6e6] mb-2 pl-4 py-2">
          <Link onClick={closeSidebar} href={"/contact-us"}>
            Contact Us
          </Link>
        </li>
        <li className="border-b border-[#e7e6e6] mb-2 pl-4 py-2">
          <a onClick={closeSidebar} href={"/blogs"}>
            {" "}
            Blogs
          </a>
        </li>
      </ul>
    </div>
  );
};

const DropDown = ({ list }: { list: { title: string; link: string }[] }) => {
  const closeSidebar = () => {
    const checkbox = document.getElementById("menu-toggle") as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };

  return (
    <ul className="hidden peer-checked:block pl-4 pb-2 space-y-2 text-sm text-accent/80 font-light ">
      {list.map((item) => (
        <li key={item.title} title={item.title}>
          <Link
            className="pb-0.5 px-1 text-[15px] underline underline-offset-1"
            href={item.link}
            onClick={closeSidebar} // Close sidebar on link click
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
