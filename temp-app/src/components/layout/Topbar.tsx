import { Search, Bell, Plus } from "lucide-react";


export default function Topbar() {
  return (
    <header className="h-20 border-b border-white/10 bg-white/[0.02] backdrop-blur-xl flex items-center justify-between px-8">
      <div className="flex items-center w-[420px] rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-slate-500">
        <Search
  size={18}
  className="mr-3 text-slate-500"
/>

        <span>Search processes...</span>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="
          rounded-xl
          border
          border-blue-500/20
          bg-white/[0.04]
          px-4
          py-2
          text-white
          transition-all
          duration-300
          hover:border-fuchsia-500/30
          hover:bg-white/[0.06]
          "
        >
          <>
  <Plus size={16} />  Create
</>
        </button>

        <button
          className="
          h-11
          w-11
          rounded-xl
          border
          border-white/10
          bg-white/[0.03]
          flex
          items-center
          justify-center
          "
        >
          <Bell size={18} />
        </button>

        <div
          className="
          h-11
          w-11
          rounded-xl
          bg-gradient-to-br
          from-cyan-400
          via-blue-500
          to-fuchsia-500
          flex
          items-center
          justify-center
          text-white
          font-bold
          "
        >
          Y
        </div>
      </div>
    </header>
  );
}
``