import { useState } from "react";
import { useTimeline } from "../../context/TimelineContext";

export default function Timeline() {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = entries.filter(e => {
    return (
      (filter === "All" || e.type === filter) &&
      e.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-6">Timeline</h1>

      {/* Filters */}
      <div className="flex gap-2 mb-4">
        {["All", "Call", "Text", "Video"].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`btn ${filter === f ? "btn-success" : ""}`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Search */}
      <input
        className="input input-bordered w-full mb-4"
        placeholder="Search by friend name..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map((e, i) => (
        <div key={i} className="card p-4 mb-2 bg-base-200">
          <p>{e.title}</p>
          <small>{new Date(e.date).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}