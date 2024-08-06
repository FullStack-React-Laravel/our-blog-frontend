"use client";

import useScrollY from "@/hooks/use-scrolly";
import { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

export function HeaderProvider({ children }) {
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
    <HeaderContext.Provider
      value={{
        showNavbar,
        showUserAdmin,
        handleShowNavbar,
        handleShowUserAdmin,
        scrollY100,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeader() {
  const context = useContext(HeaderContext);

  if (context == undefined)
    throw new Error("out of the header context boundery ");
  return context;
}
