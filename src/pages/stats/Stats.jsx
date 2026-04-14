import { useTimeline } from "../../context/TimelineContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function Stats() {
  const { entries } = useTimeline();

  const data = ["Call", "Text", "Video"].map((type) => ({
    name: type,
    value: entries.filter((e) => e.type === type).length,
  }));

  const total = entries.length;

  // 🎨 Colors for slices
  const COLORS = ["#22c55e", "#3b82f6", "#f59e0b"];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Friendship Analytics
      </h1>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-4 gap-4 mb-10">
        <div className="card bg-green-100 p-4 text-center">
          Calls: {data[0].value}
        </div>
        <div className="card bg-blue-100 p-4 text-center">
          Texts: {data[1].value}
        </div>
        <div className="card bg-yellow-100 p-4 text-center">
          Videos: {data[2].value}
        </div>
        <div className="card bg-base-200 p-4 text-center">
          Total: {total}
        </div>
      </div>

      {/* Pie Chart */}
      <div className="flex justify-center">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={120}
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          {/* 🔥 Important */}
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}