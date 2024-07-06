"use client";
import Image from "next/image";
import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";

import useScrollY from "@/hooks/use-scrolly";
import MenuBtns from "./menu-btns";
import UserDropdown from "./user-dropdown";
import NavItems from "./nav-items";

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showUserAdmin, setShowUserAdmin] = useState(false);
  const { scrollY100 } = useScrollY();

  function handleShowNavbar() {
    setShowNavbar(!showNavbar);
    setShowUserAdmin(false);
  }

  function handleShowUserAdmin() {
    setShowUserAdmin(!showUserAdmin);
    setShowNavbar(false);
  }

  return (
    <header
      className={
        "our-container fixed left-1/2 top-0 z-10 w-full -translate-x-1/2 py-6 text-white"
      }
    >
      <div
        className={`flex items-center gap-8 rounded-full py-2.5 transition-all duration-300 ${!scrollY100 ? "bg-indigo-50/5 px-2 backdrop-blur md:px-4" : ""}`}
      >
        <div className="flex items-center gap-2">
          <MenuBtns
            showNavbar={showNavbar}
            onClick={handleShowNavbar.bind(null)}
          />
          <HeaderLogo />
        </div>
        <NavItems screen="descktop" />

        <div className="ml-auto flex items-center gap-2">
          <NotificationButton />
          <button
            onClick={handleShowUserAdmin.bind(null)}
            className={
              "sectionGra flex items-center justify-center rounded-full p-0.5 pr-2"
            }
          >
            <div className="size-10 overflow-hidden rounded-full">
              <Image
                src="https://i.pravatar.cc/150?img=2"
                alt="user_avatar"
                width={150}
                height={150}
                priority
              />
            </div>
            <div className="textG hidden px-2 font-bold md:block">Jon Doe</div>
            <span
              className={`size-6 p-0.5 text-xl duration-300 ${showUserAdmin && "rotate-180"}`}
              aria-label={showUserAdmin ? "Collapse" : "Expand"}
            >
              <IoIosArrowDown />
            </span>
          </button>
        </div>
        {/* className={`mt-2 grow overflow-hidden rounded-lg border-indigo-50/10 md:justify-self-start ${navButtonActive ? "h-48 border" : "h-0 md:h-auto"}`} */}
      </div>
      <NavItems showNavbar={showNavbar} screen="mobile" />
      <UserDropdown onTop={scrollY100} showUserAdmin={showUserAdmin} />
    </header>
  );
}

function HeaderLogo() {
  return (
    <div className="aspect-square w-8 md:w-12">
      <Image
        width={512}
        height={512}
        alt="logo"
        src="/images/icon.png"
        priority
      />
    </div>
  );
}

function NotificationButton() {
  return (
    <button>
      <div className="hover:sectionGra relative rounded-full p-1.5">
        <IoIosNotifications className="text-3xl" />
        <div className="absolute right-2 top-2 size-3 animate-ping rounded-full bg-indigo-500"></div>
        <div className="absolute right-2 top-2 size-3 rounded-full bg-indigo-500"></div>
      </div>
    </button>
  );
}
