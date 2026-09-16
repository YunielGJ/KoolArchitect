import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import Dashboard from "@/components/layout/Dashboard";

export default function Home() {
  return (
    <main className="flex min-h-screen text-white">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <div className="p-8">
          <Dashboard />
        </div>
      </div>
    </main>
  );
}