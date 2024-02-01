"use client";
import Dashboard from "@/components/Side_Navigation/Page_Components/Dashboard";
import Diagnose from "@/components/Side_Navigation/Page_Components/Diagnose";
import History from "@/components/Side_Navigation/Page_Components/History";
import UserGuide from "@/components/Side_Navigation/Page_Components/UserGuide";
import { useNavContext } from "@/context/contexts";

const Page = () => {
  const { page } = useNavContext();

  return (
    <div>
      {page === "dashboard" && <Dashboard />}
      {page === "diagnose" && <Diagnose />}
      {page === "userGuide" && <UserGuide />}
      {page === "history" && <History />}
    </div>
  );
};

export default Page;
