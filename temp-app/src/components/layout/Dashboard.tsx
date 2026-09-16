import StatCard from "@/components/ui/StatCard";

export default function Dashboard() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Dashboard heading */}
      <section>
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          Design, govern and optimize your business processes.
        </p>
      </section>

      {/* Statistics */}
      <section className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Processes" value="3" color="blue" />

        <StatCard title="Templates" value="12" color="cyan" />

        <StatCard title="SOPs" value="25" color="fuchsia" />

        <StatCard title="Nodes" value="146" color="blue" />
      </section>

      {/* Recent processes heading */}
      <section className="mt-14">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Recent Processes
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Continue designing and optimizing your latest workflows.
            </p>
          </div>

          <button
            className="
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
              px-4
              py-2
              text-sm
              text-slate-300
              transition-all
              duration-300
              hover:border-cyan-400/30
              hover:bg-white/[0.06]
              hover:text-white
            "
          >
            View all
          </button>
        </div>

        {/* Process cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* Manufacturing */}
          <article
            className="
              group
              cursor-pointer
              rounded-2xl
              border
              border-white/[0.06]
              bg-white/[0.03]
              p-6
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-500/25
              hover:bg-white/[0.05]
              hover:shadow-[0_20px_60px_rgba(37,99,235,0.18)]
            "
          >
            <div className="flex items-start justify-between gap-4">
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-blue-400/20
                  bg-blue-500/10
                  text-sm
                  font-bold
                  text-blue-300
                "
              >
                MP
              </div>

              <span
                className="
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/10
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-cyan-300
                "
              >
                v1.0
              </span>
            </div>

            <h3 className="mt-6 text-lg font-semibold text-white">
              Manufacturing Process
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Production workflow, planning, manufacturing and fulfillment.
            </p>

            <div className="mt-6 flex items-center gap-3 text-xs text-slate-500">
              <span>12 nodes</span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span>3 lanes</span>
            </div>
          </article>

          {/* Inventory */}
          <article
            className="
              group
              cursor-pointer
              rounded-2xl
              border
              border-white/[0.06]
              bg-white/[0.03]
              p-6
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-500/25
              hover:bg-white/[0.05]
              hover:shadow-[0_20px_60px_rgba(6,182,212,0.18)]
            "
          >
            <div className="flex items-start justify-between gap-4">
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-cyan-400/20
                  bg-cyan-500/10
                  text-sm
                  font-bold
                  text-cyan-300
                "
              >
                IM
              </div>

              <span
                className="
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/10
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-cyan-300
                "
              >
                v2.1
              </span>
            </div>

            <h3 className="mt-6 text-lg font-semibold text-white">
              Inventory Management
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Receipts, reservations, stock transfers and inventory valuation.
            </p>

            <div className="mt-6 flex items-center gap-3 text-xs text-slate-500">
              <span>18 nodes</span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span>4 lanes</span>
            </div>
          </article>

          {/* Customer onboarding */}
          <article
            className="
              group
              cursor-pointer
              rounded-2xl
              border
              border-white/[0.06]
              bg-white/[0.03]
              p-6
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-fuchsia-500/25
              hover:bg-white/[0.05]
              hover:shadow-[0_20px_60px_rgba(217,70,239,0.18)]
            "
          >
            <div className="flex items-start justify-between gap-4">
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-fuchsia-400/20
                  bg-fuchsia-500/10
                  text-sm
                  font-bold
                  text-fuchsia-300
                "
              >
                CO
              </div>

              <span
                className="
                  rounded-full
                  border
                  border-fuchsia-400/20
                  bg-fuchsia-400/10
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-fuchsia-300
                "
              >
                v1.4
              </span>
            </div>

            <h3 className="mt-6 text-lg font-semibold text-white">
              Customer Onboarding
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              New customer activation, implementation and user training.
            </p>

            <div className="mt-6 flex items-center gap-3 text-xs text-slate-500">
              <span>9 nodes</span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span>2 lanes</span>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}