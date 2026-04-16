import { useState } from "react";
import { useTimeline } from "../../context/TimelineContext";


export default function Timeline() {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = entries.filter((e) => {
    return (
      (filter === "All" || e.type === filter) &&
      e.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  const getIcon = (type) => {
  switch (type) {
    case "Call":
      return "📞";
    case "Text":
      return "💬";
    case "Video":
      return "🎥";
    case "Meetup":
      return "🤝";
    default:
      return null;
  }
};

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-3xl font-semibold mb-6">Timeline</h1>

      {/* Filter dropdown */}
      <div className="mb-4">
        <select
          className="select select-bordered w-60"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Call</option>
          <option>Text</option>
          <option>Video</option>
          
          
        </select>
      </div>

      {/* Search */}
      <input
        className="input input-bordered w-full mb-6"
        placeholder="Search by friend name..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Timeline list */}
      <div className="space-y-3">
        {filtered.map((e, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 bg-base-100 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            {/* Icon */}
            <div className="p-2 bg-base-200 rounded-full">
              {getIcon(e.type)}
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <p className="font-medium text-sm">
                {e.type} with{" "}
                <span className="text-gray-600">{e.title}</span>
              </p>
              <span className="text-xs text-gray-400">
                {new Date(e.date).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}