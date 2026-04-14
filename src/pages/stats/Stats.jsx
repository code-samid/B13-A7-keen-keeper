import { useTimeline } from "../../context/TimelineContext";
import { PieChart, Pie, Cell } from "recharts";

export default function Stats() {
  const { entries } = useTimeline();

  const data = ["Call", "Text", "Video"].map(type => ({
    name: type,
    value: entries.filter(e => e.type === type).length
  }));

  const total = entries.length;

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-6">Friendship Analytics</h1>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="card p-4">Calls: {data[0].value}</div>
        <div className="card p-4">Texts: {data[1].value}</div>
        <div className="card p-4">Videos: {data[2].value}</div>
        <div className="card p-4">Total: {total}</div>
      </div>

      <PieChart width={400} height={400}>
        <Pie data={data} dataKey="value" outerRadius={120}>
          {data.map((_, i) => <Cell key={i} />)}
        </Pie>
      </PieChart>
    </div>
  );
}