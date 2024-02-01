import { useDashboardTypeContext, useUserContext } from "@/context/contexts";
import clsx from "clsx";
import React from "react";
import Cookies from "js-cookie";
type HeaderTabType = {
  title: string;
  isDashboard?: boolean;
};

const HeaderTab = ({ title, isDashboard }: HeaderTabType) => {
  const { dashboardState, setDashboardState } = useDashboardTypeContext();
  const { user } = useUserContext();

  const jwt = Cookies.get("token");

  const GreenBox = () => {
    return (
      <div className="absolute h-[40.5px] w-[50px] bg-emerald-200  opacity-50"></div>
    );
  };

  return (
    <section className="flex h-[100px] items-center rounded-[20px] border border-black10 bg-white">
      <h1 className="text-h2 font-bold text-blue">{title}</h1>
      {isDashboard && (
        <div className="relative flex h-[60px] items-center">
          <div className=" flex items-center gap-x-[8px]">
            <button
              onClick={() => setDashboardState("global")}
              className={clsx(
                "rounded-[15px] px-[16px] py-[8px] text-p font-semibold hover:underline",
                dashboardState === "global" ? "bg-green text-white" : "",
              )}
            >
              Global
            </button>
            <span className="h-[25px] border-[1px] border-black"></span>
            <button
              onClick={() => setDashboardState("personal")}
              className={clsx(
                "rounded-[15px] px-[16px] py-[8px] text-p font-semibold hover:underline",
                dashboardState === "personal" ? "bg-green text-white" : "",
              )}
            >
              Personal
            </button>
          </div>
          <div>
            <input
              className="h-[42px] rounded-[10px] border border-black25 px-[8px] text-small"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
      )}
      <div>{user?.username}</div>
    </section>
  );
};

export default HeaderTab;
