import { useLoaderData, useParams } from "react-router-dom";
import { useTimeline } from "../../context/TimelineContext";
import { toast } from "react-toastify";

export default function FriendDetails() {
  const friends = useLoaderData();
  const { id } = useParams();
  const { addEntry } = useTimeline();

  const friend = friends.find(f => f.id == id);

  const handle = (type) => {
    addEntry({
      type,
      title: `${type} with ${friend.name}`,
      date: new Date().toISOString()
    });

    toast.success(`${type} logged with ${friend.name}!`);
  };

  // ✅ Dynamic status color
  const statusColor = {
  "overdue": "bg-[#EF4444] text-white",
  "almost due": "bg-[#EFAD44] text-white",
  "on-track": "bg-[#244D3F] text-white"
};

  return (
    <div className="grid container mx-auto md:grid-cols-3 gap-6 p-6 items-stretch">

      {/* LEFT SIDE */}
      <div className="space-y-4 h-full flex flex-col">

        {/* Profile Card */}
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition text-center flex-grow">
          <img
            src={friend.picture}
            className="w-24 h-24 mx-auto rounded-full object-cover"
          />

          <h2 className="text-xl font-semibold mt-4">{friend.name}</h2>

          {/* Status */}
          <span
            className={`inline-block mt-2 px-3 py-1 text-sm rounded-full text-white ${statusColor[friend.status]}`}
          >
            {friend.status}
          </span>

          {/* Tags */}
          <div className="mt-3 flex justify-center gap-2 flex-wrap">
            {friend.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-4 text-gray-500 italic">"{friend.bio}"</p>
          <p className="text-sm text-gray-400 mt-2">{friend.email}</p>
        </div>

        {/* Action Buttons (pushed to bottom) */}
        <div className="mt-auto space-y-3">
          <button className="w-full border rounded-lg p-3 flex items-center justify-center gap-2 hover:bg-gray-50">
            ⏰ Snooze 2 Weeks
          </button>

          <button className="w-full border rounded-lg p-3 flex items-center justify-center gap-2 hover:bg-gray-50">
            📦 Archive
          </button>

          <button className="w-full border rounded-lg p-3 flex items-center justify-center gap-2 text-red-500 hover:bg-red-50">
            🗑️ Delete
          </button>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="md:col-span-2 space-y-4">

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl py-8 shadow hover:shadow-md transition text-center">
            <h2 className="text-2xl font-bold text-green-800">
              {friend.days_since_contact}
            </h2>
            <p className="text-gray-500 text-sm">Days Since Contact</p>
          </div>

          <div className="bg-white rounded-xl py-8 shadow hover:shadow-md transition text-center">
            <h2 className="text-2xl font-bold text-green-800">
              {friend.goal}
            </h2>
            <p className="text-gray-500 text-sm">Goal (Days)</p>
          </div>

          <div className="bg-white rounded-xl py-8 shadow hover:shadow-md transition text-center">
            <h2 className="text-xl font-bold text-green-800">
              {friend.next_due_date}
            </h2>
            <p className="text-gray-500 text-sm">Next Due</p>
          </div>
        </div>

        {/* Relationship Goal */}
        <div className="bg-white rounded-xl shadow hover:shadow-md transition p-6 flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-green-900 mb-2">
              Relationship Goal
            </h3>
            <p className="text-gray-600">
              Connect every{" "}
              <span className="font-bold">{friend.goal} days</span>
            </p>
          </div>

          <button className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
            Edit
          </button>
        </div>

        {/* Quick Check-In */}
        <div className="bg-white rounded-xl shadow hover:shadow-md transition p-6">
          <h3 className="font-semibold text-green-900 mb-4">
            Quick Check-In
          </h3>

          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => handle("Call")}
              className="border rounded-lg p-4 flex flex-col items-center hover:bg-gray-50"
            >
              📞
              <span className="mt-2">Call</span>
            </button>

            <button
              onClick={() => handle("Text")}
              className="border rounded-lg p-4 flex flex-col items-center hover:bg-gray-50"
            >
              💬
              <span className="mt-2">Text</span>
            </button>

            <button
              onClick={() => handle("Video")}
              className="border rounded-lg p-4 flex flex-col items-center hover:bg-gray-50"
            >
              🎥
              <span className="mt-2">Video</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}