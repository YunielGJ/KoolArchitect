export default function Button() {
  return (
    <button
      className="
      px-6
      py-3
      rounded-xl

      border
      border-blue-500/40

      bg-white/5
      backdrop-blur-md

      text-white
      font-semibold

      shadow-[0_0_20px_rgba(37,99,235,0.25)]

      transition-all
      duration-300

      hover:border-fuchsia-500/60
      hover:shadow-[0_0_35px_rgba(217,70,239,0.35)]
      hover:-translate-y-1
      "
    >
      + New Process
    </button>
  );
}