"use client";
import Dashboard from "@/components/Side_Navigation/Page_Components/Dashboard";
import Diagnose from "@/components/Side_Navigation/Page_Components/Diagnose";
import History from "@/components/Side_Navigation/Page_Components/History";
import UserGuide from "@/components/Side_Navigation/Page_Components/UserGuide";
import { User, useNavContext, useUserContext } from "@/context/contexts";
import { useEffect } from "react";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";

const Page = () => {
  const { page } = useNavContext();

  const { user, setUser } = useUserContext();

  // useEffect(() => {
  //   const token = Cookies.get("token");
  //   if (token) {
  //     const decoded: any = jwt.decode(token);
  //     const user: User = {
  //       id: decoded?.id,
  //       username: decoded?.username,
  //       email: decoded?.email,
  //     };
  //     setUser(user);
  //     console.log(decoded);
  //   }
  // });

  return (
    <div className="h-full p-[32px]">
      {page === "dashboard" && <Dashboard />}
      {page === "diagnose" && <Diagnose />}
      {page === "userGuide" && <UserGuide />}
      {page === "history" && <History />}
    </div>
  );
};

export default Page;
