"use client";

import { NavComponents, useNavContext } from "@/context/contexts";
import React, { useState } from "react";
import {
  DashboardIcon,
  DiagnoseIcon,
  HistoryIcon,
  UserGuideIcon,
} from "../svgs";
import clsx from "clsx";

const NavLinks = () => {
  const { page, setPage } = useNavContext();
  const [linePosition, setLinePosition] = useState(0);
  const [startY, setStartY] = useState(0);
  const [endY, setEndY] = useState(0);

  const changePage = (page: NavComponents, index: number) => {
    setLinePosition(index);
    setStartY(linePosition * 64);
    setEndY(index * 64);
    setPage(page);
  };

  const IsActiveLine = () => {
    return (
      <div
        className="active-line absolute mt-[2px] h-[24px] border-[3px] border-blue"
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
    <section className="relative flex gap-x-[64px]">
      <div>
        <IsActiveLine />
      </div>
      <div className="flex flex-col gap-y-[32px]">
        <button
          onClick={() => changePage("dashboard", 0)}
          className="group flex w-full  items-center gap-x-[16px]"
        >
          <DashboardIcon
            className={clsx(
              "h-[24px] w-[24px] stroke-[2px] group-hover:stroke-blue",
              page === "dashboard" ? "stroke-blue" : "stroke-black50",
            )}
          />
          <h1
            className={clsx(
              "text-p font-semibold group-hover:text-blue",
              page === "dashboard" ? "text-blue" : "text-black50",
            )}
          >
            Dashboard
          </h1>
        </button>

        <button
          onClick={() => changePage("diagnose", 1)}
          className="group flex w-full  items-center gap-x-[16px]"
        >
          <DiagnoseIcon
            className={clsx(
              "h-[px] w-[24px]",
              page === "diagnose"
                ? "fill-blue stroke-blue"
                : "fill-black50 stroke-black50",
              "group-hover:fill-blue group-hover:stroke-blue",
            )}
          />
          <h1
            className={clsx(
              "text-p font-semibold group-hover:text-blue",
              page === "diagnose" ? "text-blue" : "text-black50",
            )}
          >
            Diagnose
          </h1>
        </button>

        <button
          onClick={() => changePage("userGuide", 2)}
          className="group flex w-full  items-center gap-x-[16px]"
        >
          <UserGuideIcon
            className={clsx(
              "h-[24px] w-[24px] ",
              page === "userGuide" ? "fill-blue" : "fill-black50",
              "group-hover:fill-blue",
            )}
          />
          <h1
            className={clsx(
              "text-p font-semibold",
              "group-hover:text-blue",
              page === "userGuide" ? "text-blue" : "text-black50",
            )}
          >
            User Guide
          </h1>
        </button>

        <button
          onClick={() => changePage("history", 3)}
          className="group flex w-full  items-center gap-x-[16px]"
        >
          <HistoryIcon
            className={clsx(
              "h-[24px] w-[24px]  stroke-[1px]",
              "group-hover:fill-blue group-hover:stroke-blue",
              page === "history"
                ? "fill-blue stroke-blue"
                : "fill-black50 stroke-black50",
            )}
          />
          <h1
            className={clsx(
              "text-p font-semibold",
              "group-hover:text-blue",
              page === "history" ? "text-blue" : "text-black50",
            )}
          >
            History
          </h1>
        </button>
      </div>
    </section>
  );
};

export default NavLinks;
