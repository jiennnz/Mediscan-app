import { ObjectId } from "mongodb";

export type MainPageProviderProps = {
  children: React.ReactNode;
};

// Navvigation Context
export type HeaderTabType = "dashboard" | "diagnose" | "userGuide" | "history";
export type HeaderTabContextType = {
  page: HeaderTabType;
  setPage: React.Dispatch<React.SetStateAction<HeaderTabType>>;
};

// Dashboard Context
export type DashboardType = "global" | "personal";
export type DashboardContextType = {
  dashboardState: DashboardType;
  setDashboardState: React.Dispatch<React.SetStateAction<DashboardType>>;
};

// UserCookie Data Context
export type UserContextType = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};
export type UserType = {
  id: ObjectId;
  username: string;
  email: string;
};
