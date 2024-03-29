"use client";

import { useHeaderTabContext } from "@/context/contexts";
import React, { useState } from "react";
import {
  DashboardIcon,
  DiagnoseIcon,
  HistoryIcon,
  UserGuideIcon,
} from "../svgs";
import clsx from "clsx";
import Link from "next/link";
import { HeaderTabType } from "@/types/types";

const NavLinks = () => {
  const { page, setPage } = useHeaderTabContext();
  const [linePosition, setLinePosition] = useState(0);
  const [startY, setStartY] = useState(0);
  const [endY, setEndY] = useState(0);

  const changePage = (page: HeaderTabType, index: number) => {
    setLinePosition(index);
    setStartY(linePosition * 64);
    setEndY(index * 63);
    setPage(page);
  };

  const IsActiveLine = () => {
    return (
      <div
        className="active-line absolute  h-[47px] border-[3px] border-blue"
        style={
          {
            "--startY": `${startY}px`,
            "--endY": `${endY}px`,
          } as React.CSSProperties
        }
      ></div>
    );
  };

  return (
    <section className="relative flex h-full pt-[32px]">
      <div>
        <IsActiveLine />
      </div>
      <div className=" flex h-full w-full flex-col gap-y-[16px]">
        {/* DASHBOARD */}
        <Link
          className={clsx(
            "group flex h-[47px] w-full",
            page === "dashboard" ? "bg-sky-100" : "",
          )}
          onClick={() => changePage("dashboard", 0)}
          key={"dashboard"}
          href={"/dashboard"}
        >
          <div className="ml-[64px] flex items-center gap-x-[24px]">
            <DashboardIcon
              className={clsx(
                "h-[26px] w-[26px]  stroke-[2px] group-hover:stroke-blue",
                page === "dashboard" ? "stroke-blue" : "stroke-black50",
              )}
            />
            <h1
              className={clsx(
                "text-p font-bold group-hover:text-black",
                page === "dashboard" ? "text-black" : "text-black50",
              )}
            >
              Overview
            </h1>
          </div>
        </Link>

        {/* DIAGNOSE */}
        <Link
          className={clsx(
            "group flex h-[47px] w-full",
            page === "diagnose" ? "bg-sky-100" : "",
          )}
          onClick={() => changePage("diagnose", 1)}
          key={"diagnose"}
          href={"/diagnose"}
        >
          <div className="ml-[64px] flex items-center gap-x-[24px]">
            <DiagnoseIcon
              className={clsx(
                "h-[26px] w-[26px] group-hover:fill-blue group-hover:stroke-blue",
                page === "diagnose"
                  ? "fill-blue stroke-blue"
                  : "fill-black50 stroke-black50",
              )}
            />
            <h1
              className={clsx(
                "text-p font-bold group-hover:text-black",
                page === "diagnose" ? "text-black" : "text-black50",
              )}
            >
              Diagnose
            </h1>
          </div>
        </Link>

        {/* USER GUIDE */}
        <Link
          className={clsx(
            "group flex h-[47px] w-full",
            page === "userGuide" ? "bg-sky-100" : "",
          )}
          onClick={() => changePage("userGuide", 2)}
          key={"user-guide"}
          href={"/user-guide"}
        >
          <div className="ml-[64px] flex items-center gap-x-[24px]">
            <UserGuideIcon
              className={clsx(
                "h-[26px] w-[26px] group-hover:fill-blue",
                page === "userGuide" ? "fill-blue" : "fill-black50",
              )}
            />
            <h1
              className={clsx(
                "text-p font-bold group-hover:text-black",
                page === "userGuide" ? "text-black" : "text-black50",
              )}
            >
              User Guide
            </h1>
          </div>
        </Link>

        {/* HISTORY */}
        <Link
          className={clsx(
            "group flex h-[47px] w-full",
            page === "history" ? "bg-sky-100" : "",
          )}
          onClick={() => changePage("history", 3)}
          key={"history"}
          href={"/history"}
        >
          <div className="ml-[64px] flex items-center gap-x-[24px]">
            <HistoryIcon
              className={clsx(
                "h-[26px] w-[26px] group-hover:fill-blue group-hover:stroke-blue ",
                page === "history"
                  ? "fill-blue stroke-blue "
                  : "fill-black50 stroke-black50 ",
              )}
            />
            <h1
              className={clsx(
                "text-p font-bold group-hover:text-black",
                page === "history" ? "text-black" : "text-black50",
              )}
            >
              History
            </h1>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default NavLinks;
