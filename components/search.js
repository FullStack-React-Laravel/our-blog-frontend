"use client";
import useDebounce from "@/hooks/use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function Search() {
  //======================== COMPONENT LOGIC ============================
  const [value, setValue] = useState("");
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const debouncedValue = useDebounce(value, 3000);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (debouncedValue) params.set("query", debouncedValue);
    else params.delete("query");
    replace(`${pathname}?${params.toString()}`);
  }, [debouncedValue, replace, pathname, searchParams]);

  const addQuery = (e) => setValue(e.target.value);

  //======================== JSX COMPONENT ============================
  return (
    <div className="relative text-white">
      <input
        value={value}
        onChange={addQuery}
        className="sectionGra w-full rounded-full py-3 pl-10 outline-none ring-indigo-500 transition-all duration-300 focus:scale-105 focus:ring-4 md:py-5 md:pl-14 md:text-xl"
        placeholder="search ..."
      />
      <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl md:left-4 md:text-2xl" />
    </div>
  );
}
