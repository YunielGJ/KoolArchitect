import {
  LayoutDashboard,
  FolderTree,
  Files,
  Bot,
  ChartNoAxesCombined,
  Settings,
  Plus,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside
      className="
      w-72
      h-screen

      border-r
      border-white/10

      bg-white/[0.03]
      backdrop-blur-xl

      p-6

      flex
      flex-col
      "
    >
      {/* LOGO */}

      <div className="flex items-center gap-4">
        <div
          className="
          h-14
          w-14

          rounded-2xl

          bg-gradient-to-br
          from-cyan-400
          via-blue-500
          to-fuchsia-500

          flex
          items-center
          justify-center

          text-white
          text-xl
          font-bold

          shadow-[0_0_30px_rgba(59,130,246,0.35)]
          "
        >
          K
        </div>

        <div>
          <h1 className="text-2xl font-bold text-white">
            KoolArchitect
          </h1>

          <p className="text-xs text-slate-400">
            Business Process Intelligence
          </p>
        </div>
      </div>

      {/* NAVIGATION */}

<nav className="mt-12 flex flex-col gap-2">
  <button
    title="Dashboard"
    className="
    flex
    items-center
    gap-3

    rounded-xl

    px-4
    py-3

    bg-gradient-to-r
    from-blue-500/15
    to-fuchsia-500/10

    border
    border-blue-500/20

    text-white
    font-medium

    shadow-[0_0_20px_rgba(37,99,235,0.15)]
    "
  >
    <LayoutDashboard size={18} />
    Dashboard
  </button>

  <button
    title="Processes"
    className="
    flex
    items-center
    gap-3

    rounded-xl

    px-4
    py-3

    text-slate-400

    transition-all
    duration-300

    hover:bg-white/[0.04]
    hover:text-white
    "
  >
    <FolderTree size={18} />
    Processes
  </button>

  <button
    title="Templates"
    className="
    flex
    items-center
    gap-3

    rounded-xl

    px-4
    py-3

    text-slate-400

    transition-all
    duration-300

    hover:bg-white/[0.04]
    hover:text-white
    "
  >
    <Files size={18} />
    Templates
  </button>

  <button
    title="SOP Builder"
    className="
    flex
    items-center
    gap-3

    rounded-xl

    px-4
    py-3

    text-slate-400

    transition-all
    duration-300

    hover:bg-white/[0.04]
    hover:text-white
    "
  >
    <Files size={18} />
    SOP Builder
  </button>

  <button
    title="AI Assistant"
    className="
    flex
    items-center
    gap-3

    rounded-xl

    px-4
    py-3

    text-slate-400

    transition-all
    duration-300

    hover:bg-white/[0.04]
    hover:text-white
    "
  >
    <Bot size={18} />
    AI Assistant
  </button>

  <button
    title="Analytics"
    className="
    flex
    items-center
    gap-3

    rounded-xl

    px-4
    py-3

    text-slate-400

    transition-all
    duration-300

    hover:bg-white/[0.04]
    hover:text-white
    "
  >
    <ChartNoAxesCombined size={18} />
    Analytics
  </button>

  <button
    title="Settings"
    className="
    flex
    items-center
    gap-3

    rounded-xl

    px-4
    py-3

    text-slate-400

    transition-all
    duration-300

    hover:bg-white/[0.04]
    hover:text-white
    "
  >
    <Settings size={18} />
    Settings
  </button>
</nav>


      {/* FOOTER */}

      <div className="mt-auto">
        <button
          className="
          w-full

          rounded-xl

          border
          border-blue-500/30

          bg-white/[0.05]

          px-4
          py-3

          font-medium

          flex
          items-center
          justify-center
          gap-2

          transition-all
          duration-300

          hover:border-fuchsia-500/40
          hover:shadow-[0_0_25px_rgba(217,70,239,0.25)]
          "
        >
          <Plus size={18} />
          New Process
        </button>

        <div className="mt-6 border-t border-white/10 pt-5">
          <div className="font-medium text-white">
            Yuniel Gonzalez
          </div>

          <div className="text-xs text-slate-500">
            Kool&Tech
          </div>
        </div>
      </div>
    </aside>
  );
}