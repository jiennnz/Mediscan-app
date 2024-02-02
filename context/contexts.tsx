"use client";

import {
  DashboardContextType,
  DashboardType,
  HeaderTabContextType,
  HeaderTabType,
  MainPageProviderProps,
  UserContextType,
  UserType,
} from "@/types/types";
import React, { createContext, useContext, useState } from "react";

export const HeaderTabContext = createContext<HeaderTabContextType | null>(
  null,
);
export const DashboardContext = createContext<DashboardContextType | null>(
  null,
);
export const UserContext = createContext<UserContextType | null>(null);

export function MainPageProvider({ children }: MainPageProviderProps) {
  const [page, setPage] = useState<HeaderTabType>("dashboard");
  const [dashboardState, setDashboardState] = useState<DashboardType>("global");

  return (
    <HeaderTabContext.Provider
      value={{
        page,
        setPage,
      }}
    >
      <DashboardContext.Provider value={{ dashboardState, setDashboardState }}>
        {children}
      </DashboardContext.Provider>
    </HeaderTabContext.Provider>
  );
}

export function AuthProvider({ children }: MainPageProviderProps) {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useHeaderTabContext() {
  const context = useContext(HeaderTabContext);
  if (!context) {
    throw new Error("useNavContext must be used within a NavContextProvider");
  }

  return context;
}

export function useDashboardTypeContext() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      "useDashBoardTypeContext must be used within a DashBoardTypeContextProvider",
    );
  }

  return context;
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useDashBoardTypeContext must be used within a DashBoardTypeContextProvider",
    );
  }

  return context;
}
