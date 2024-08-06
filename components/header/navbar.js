"use client";
import logo from "@/public/images/icon.png";
import Image from "next/image";
import MenuBtns from "./menu-btns";
import NavItems from "./nav-items";
import UserDropdown from "./user-dropdown";
import UserInfo from "./user-info";
import { useHeader } from "@/context/header-context";
import Link from "next/link";

export default function Navbar({ session }) {
  const { scrollY100 } = useHeader();

  return (
    <>
      <div
        className={`flex items-center gap-2 rounded-full py-2.5 transition-all duration-300 ${!scrollY100 ? "bg-[#000436]/60 px-2 backdrop-blur-lg md:px-4" : ""}`}
      >
        <div className="flex items-center gap-2">
          <MenuBtns />
          <HeaderLogo />
        </div>
        <NavItems screen="descktop" />
        {/* show user info if user logged in */}
        {session ? (
          <UserInfo session={session} />
        ) : (
          <Link href="/login" className="ml-auto capitalize">
            Login in
          </Link>
        )}
      </div>
      <NavItems screen="mobile" />
      <UserDropdown session={session} />
    </>
  );
}

function HeaderLogo() {
  return (
    <div className="aspect-square w-8 md:w-12">
      <Image alt="logo" src={logo} priority />
    </div>
  );
}
