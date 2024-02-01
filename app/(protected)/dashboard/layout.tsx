import SideNav from "@/components/Side_Navigation/SideNav";
import { NavContextProvider } from "@/context/contexts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <NavContextProvider>
        <SideNav />
        <div>{children}</div>
      </NavContextProvider>
    </div>
  );
}
