"use client";

import React, { createContext, useContext, useState } from "react";

type NavContextProviderProps = {
  children: React.ReactNode;
};

export type NavComponents = "dashboard" | "diagnose" | "userGuide" | "history";

type NavContext = {
  page: NavComponents;
  setPage: React.Dispatch<React.SetStateAction<NavComponents>>;
};

export const NavContext = createContext<NavContext | null>(null);

export function NavContextProvider({ children }: NavContextProviderProps) {
  const [page, setPage] = useState<NavComponents>("dashboard");

  return (
    <NavContext.Provider
      value={{
        page,
        setPage,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

export function useNavContext() {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNavContext must be used within a NavContextProvider");
  }

  return context;
}
