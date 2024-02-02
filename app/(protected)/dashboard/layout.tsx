import SideNav from "@/components/Side_Navigation/SideNav";
import { MainPageProvider } from "@/context/contexts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen">
      <MainPageProvider>
        <div>
          <SideNav />
        </div>
        <div className=" flex-grow">{children}</div>
      </MainPageProvider>
    </div>
  );
}
