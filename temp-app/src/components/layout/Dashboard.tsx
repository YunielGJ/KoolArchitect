export default function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl px-8 py-16">
      <h2 className="text-3xl font-bold">
        My Processes
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-700 p-6">
          Manufacturing Process
        </div>

        <div className="rounded-xl border border-slate-700 p-6">
          Inventory Management
        </div>

        <div className="rounded-xl border border-slate-700 p-6">
          Customer Onboarding
        </div>
      </div>
    </div>
  );
}