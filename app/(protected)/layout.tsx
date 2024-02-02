import HeaderTab from "@/components/Side_Navigation/Page_Components/components/HeaderTab";
import SideNav from "@/components/Side_Navigation/SideNav";
import { MainPageProvider } from "@/context/contexts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex  h-screen w-screen">
      <MainPageProvider>
        <div>
          <SideNav />
        </div>

        <div className="flex h-full flex-grow flex-col gap-y-[16px] p-[32px]">
          <div>
            <HeaderTab title="Dashboard" isDashboard />
          </div>
          <div className="flex-grow bg-red-400">{children}</div>
        </div>
      </MainPageProvider>
    </div>
  );
}
