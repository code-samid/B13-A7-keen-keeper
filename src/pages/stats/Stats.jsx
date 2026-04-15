import { useTimeline } from "../../context/TimelineContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function Stats() {
  const { entries } = useTimeline();

  const data = ["Text", "Call", "Video"].map((type) => ({
    name: type,
    value: entries.filter((e) => e.type === type).length,
  }));

  // 🎨 Match your Figma colors
  const COLORS = ["#7C3AED", "#1F4D3F", "#2E9E66"];

  return (
    <div className="px-6 py-10">
      
      {/* Title (LEFT aligned) */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Friendship Analytics
      </h1>

      {/* White Card */}
      <div className="bg-white rounded-xl shadow p-6">
        
        {/* Subheading */}
        <h2 className="text-lg font-semibold text-green-900 mb-6">
          By Interaction Type
        </h2>

        {/* Donut Chart */}
        <div className="flex justify-center">
          <PieChart width={320} height={320}>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={80}     // 🔥 makes it donut
              outerRadius={110}
              paddingAngle={5}
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
}