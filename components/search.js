"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function Search() {
  //======================== COMPONENT LOGIC ============================
  const [value, setValue] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (value) {
        router.push(`${pathname}?query=${value}`);
      } else {
        router.push(`${pathname}`);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [value, router, pathname]);
  const addQuery = (e) => setValue(e.target.value);

  //======================== JSX COMPONENT ============================
  return (
    <div className="relative text-white">
      <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl md:left-4 md:text-2xl" />
      <input
        value={value}
        onChange={addQuery}
        className="sectionGra w-full rounded-full py-3 pl-10 outline-none ring-indigo-500 transition-all duration-300 focus:ring-4 md:py-5 md:pl-12 md:text-xl"
        placeholder="search ..."
      />
    </div>
  );
}
