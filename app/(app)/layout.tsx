import { Sidebar } from "@/components/shell/Sidebar";
import { TabBar } from "@/components/shell/TabBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh bg-bg-primary text-text-primary">
      <Sidebar />
      <main className="flex-1 pb-[88px] lg:pb-0">{children}</main>
      <TabBar />
    </div>
  );
}
