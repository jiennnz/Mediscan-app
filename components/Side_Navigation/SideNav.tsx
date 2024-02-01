"use client";
import React from "react";
import Logo from "../Logo";
import NavLinks from "./NavLinks";
import { LogoutIcon, SettingsIcon } from "../svgs";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SideNav = () => {
  const router = useRouter();

  const onLogout = async () => {
    const myPromise = axios.get("/api/auth/logout");
    await toast.promise(myPromise, {
      loading: "Logging you out...",
      success: "See you again!",
      error: (error) => {
        console.error("Logout error:", error);
        const errorMessage = error.response?.data?.error || "Failed to logout";
        return errorMessage; // Error message
      },
    });

    try {
      const response = await myPromise;
      console.log(response.data.success);
      if (response.data.success) {
        router.push("/");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <nav className="flex h-full w-[288px]  flex-col items-center bg-white">
      {/* header */}
      <header className="flex h-[140px] w-full flex-col  items-center justify-center ">
        <Logo />
      </header>

      {/* body (nav links) */}

      <nav className=" w-full flex-grow ">
        <NavLinks />
      </nav>

      {/* footer (settings and logout) */}
      <footer className="flex h-[203px] w-full items-center justify-center">
        <div></div>
        <div className="flex h-full w-full flex-col  gap-y-[16px]">
          <button className="group flex h-[47px] w-full">
            <div className="ml-[64px] flex items-center gap-x-[24px]">
              <SettingsIcon className="h-[24px] w-[24px] stroke-black50 stroke-[2px] group-hover:stroke-blue" />
              <h1 className="text-p font-semibold text-black50 group-hover:text-black">
                Settings
              </h1>
            </div>
          </button>

          <button onClick={onLogout} className="group flex h-[47px] w-full">
            <div className="ml-[64px] flex items-center gap-x-[24px]">
              <LogoutIcon className="h-[24px] w-[24px] stroke-black50 stroke-[2px] group-hover:stroke-blue" />
              <h1 className="text-p font-semibold text-black50 group-hover:text-black">
                Logout
              </h1>
            </div>
          </button>
        </div>
      </footer>
    </nav>
  );
};

export default SideNav;
