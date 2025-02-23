import RotateAnim from "@/anim/rotate-anim";

import { AnimatePresence } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";
import { useHeader } from "@/context/header-context";

export default function MenuBtns() {
  const { handleShowNavbar, showNavbar } = useHeader();

  let iconRender;
  if (showNavbar) iconRender = <IoIosClose className="m-auto text-3xl" />;
  else iconRender = <HiMenuAlt2 className="m-auto text-3xl" />;

  return (
    <button
      onClick={() => handleShowNavbar()}
      aria-label={showNavbar ? "Close Menu" : "Open Menu"}
      className={"hover:sectionGra relative size-10 rounded-full md:hidden"}
    >
      <AnimatePresence>
        <RotateAnim
          classes="absolute pt-1.5 size-full left-0 top-0 "
          key={showNavbar ? "open" : "close"}
        >
          {iconRender}
        </RotateAnim>
      </AnimatePresence>
    </button>
  );
}
