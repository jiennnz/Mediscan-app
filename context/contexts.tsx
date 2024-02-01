"use client";

import { ObjectId } from "mongodb";
import React, { createContext, useContext, useState } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

export type NavComponents = "dashboard" | "diagnose" | "userGuide" | "history";
export type DashboardType = "global" | "personal";
export type User = {
  id: ObjectId;
  username: string;
  email: string;
};

type UserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

type NavContext = {
  page: NavComponents;
  setPage: React.Dispatch<React.SetStateAction<NavComponents>>;
};

type DashboardTypeContext = {
  dashboardState: DashboardType;
  setDashboardState: React.Dispatch<React.SetStateAction<DashboardType>>;
};

export const NavContext = createContext<NavContext | null>(null);
export const DashboardTypeContext = createContext<DashboardTypeContext | null>(
  null,
);
export const UserContext = createContext<UserContext | null>(null);

export function MainPageProvider({ children }: ProviderProps) {
  const [page, setPage] = useState<NavComponents>("dashboard");
  const [dashboardState, setDashboardState] = useState<DashboardType>("global");

  return (
    <NavContext.Provider
      value={{
        page,
        setPage,
      }}
    >
      <DashboardTypeContext.Provider
        value={{ dashboardState, setDashboardState }}
      >
        {children}
      </DashboardTypeContext.Provider>
    </NavContext.Provider>
  );
}

export function AuthProvider({ children }: ProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useNavContext() {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNavContext must be used within a NavContextProvider");
  }

  return context;
}

export function useDashboardTypeContext() {
  const context = useContext(DashboardTypeContext);
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
