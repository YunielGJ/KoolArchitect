import Hero from "@/components/layout/Hero";
import Dashboard from "@/components/layout/Dashboard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Dashboard />
    </main>
  );
}