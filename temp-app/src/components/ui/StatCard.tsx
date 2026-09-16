type StatCardProps = {
  title: string;
  value: string;
  color?: "blue" | "cyan" | "fuchsia";
};

export default function StatCard({
  title,
  value,
  color = "blue",
}: StatCardProps) {
  const colorClasses = {
    blue: "text-blue-400",
    cyan: "text-cyan-400",
    fuchsia: "text-fuchsia-400",
  };

  return (
    <div
      className="
      rounded-2xl

      bg-white/[0.03]
      backdrop-blur-xl

      border
      border-white/[0.06]

      p-6

      transition-all
      duration-300

      hover:bg-white/[0.05]
      hover:border-white/[0.12]
      hover:-translate-y-1
      "
    >
      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3
        className={`mt-3 text-4xl font-bold ${colorClasses[color]}`}
      >
        {value}
      </h3>
    </div>
  );
}