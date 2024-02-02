"use client";

import {
  useDashboardTypeContext,
  useHeaderTabContext,
  useUserContext,
} from "@/context/contexts";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Time from "./Time";
import jwt from "jsonwebtoken";
type HeaderTabType = {
  title: string;
  isDashboard?: boolean;
};

const HeaderTab = ({}: HeaderTabType) => {
  const { dashboardState, setDashboardState } = useDashboardTypeContext();
  const { page } = useHeaderTabContext();
  const { user } = useUserContext();

  return (
    <section className="flex h-[100px] items-center justify-between rounded-[20px] border border-black10 bg-white px-[32px]">
      <div className="flex items-end gap-x-[16px]">
        <h1 className=" text-h1 font-bold text-blue">
          {page === "dashboard"
            ? "Dashboard"
            : page === "diagnose"
              ? "Pneumonia Diagnosis"
              : page === "userGuide"
                ? "User Guide"
                : page === "history"
                  ? "History"
                  : ""}
        </h1>
        {page === "dashboard" && (
          <div className="relative flex h-[60px] items-center gap-x-[16px]">
            <div className=" flex items-center gap-x-[4px]">
              <button
                onClick={() => setDashboardState("global")}
                className={clsx(
                  " text-p font-bold ",
                  dashboardState === "global"
                    ? "text-green"
                    : "text-black50 hover:underline",
                )}
              >
                Global
              </button>
              <span className="h-[25px] border-[1px] border-black50"></span>
              <button
                onClick={() => setDashboardState("personal")}
                className={clsx(
                  " text-p font-bold ",
                  dashboardState === "personal"
                    ? "text-green "
                    : "text-black50 hover:underline",
                )}
              >
                Personal
              </button>
            </div>
            {/* Search */}
            <div>
              <input
                className="h-[42px] rounded-[10px] border border-black25 px-[8px] text-small"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-x-[16px] text-p font-semibold text-black">
        <div className="flex flex-col items-center ">
          <h1>{user?.username}</h1>
          <Time className="" />
        </div>
        <div className="h-[64px] w-[64px] rounded-[35px] border border-black75 "></div>
      </div>
    </section>
  );
};

export default HeaderTab;
