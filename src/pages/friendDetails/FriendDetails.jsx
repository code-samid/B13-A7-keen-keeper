import { useParams } from "react-router-dom";
import { useTimeline } from "../../context/TimelineContext";
import { toast } from "react-toastify";
import useFriends from "../../hooks/useFriends";

export default function FriendDetails() {
  const { id } = useParams();
  const { addEntry } = useTimeline();
  const { friends } = useFriends();

  const friend = friends.find(f => String(f.id) === id);
  if (!friend) return null;

  const handle = (type) => {
    addEntry({
      type,
      title: `${type} with ${friend.name}`,
      date: new Date().toISOString()
    });

    toast.success(`${type} logged with ${friend.name}!`);
  };

  const statusColor = {
    "overdue": "bg-[#EF4444] text-white",
    "almost due": "bg-[#F59E0B] text-white",
    "on-track": "bg-[#244D3F] text-white"
  };

  return (
    <div className="container mx-auto p-6 grid md:grid-cols-3 gap-6 bg-[#F8FAFC] min-h-screen">

      {/* LEFT COLUMN */}
      <div className="space-y-4">

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <img
            src={friend.picture}
            className="w-24 h-24 mx-auto rounded-full object-cover"
          />

          <h2 className="text-lg font-semibold mt-4 text-gray-800">
            {friend.name}
          </h2>

          {/* Status */}
          <span className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${statusColor[friend.status]}`}>
            {friend.status}
          </span>

          {/* Tags */}
          <div className="mt-3 flex justify-center gap-2 flex-wrap">
            {friend.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-4 text-gray-500 italic text-sm">
            "{friend.bio}"
          </p>

          <p className="text-xs text-gray-400 mt-2">
            Preferred: {friend.email}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button className="w-full bg-white border rounded-lg py-3 hover:bg-gray-50 flex justify-center gap-2">
            ⏰ Snooze 2 Weeks
          </button>

          <button className="w-full bg-white border rounded-lg py-3 hover:bg-gray-50 flex justify-center gap-2">
            📦 Archive
          </button>

          <button className="w-full bg-white border rounded-lg py-3 text-red-500 hover:bg-red-50 flex justify-center gap-2">
            🗑️ Delete
          </button>
        </div>

      </div>

      {/* RIGHT COLUMN */}
      <div className="md:col-span-2 space-y-6">

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow py-8 text-center">
            <h2 className="text-2xl font-bold text-[#244D3F]">
              {friend.days_since_contact}
            </h2>
            <p className="text-gray-500 text-sm">Days Since Contact</p>
          </div>

          <div className="bg-white rounded-xl shadow py-8 text-center">
            <h2 className="text-2xl font-bold text-[#244D3F]">
              {friend.goal}
            </h2>
            <p className="text-gray-500 text-sm">Goal (Days)</p>
          </div>

          <div className="bg-white rounded-xl shadow py-8 text-center">
            <h2 className="text-xl font-bold text-[#244D3F]">
              {friend.next_due_date}
            </h2>
            <p className="text-gray-500 text-sm">Next Due</p>
          </div>
        </div>

        {/* Relationship Goal */}
        <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-[#244D3F] mb-2">
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
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold text-[#244D3F] mb-4">
            Quick Check-In
          </h3>

          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => handle("Call")}
              className="border rounded-lg p-4 flex flex-col items-center hover:bg-gray-50"
            >
              📞
              <span className="mt-2 text-sm">Call</span>
            </button>

            <button
              onClick={() => handle("Text")}
              className="border rounded-lg p-4 flex flex-col items-center hover:bg-gray-50"
            >
              💬
              <span className="mt-2 text-sm">Text</span>
            </button>

            <button
              onClick={() => handle("Video")}
              className="border rounded-lg p-4 flex flex-col items-center hover:bg-gray-50"
            >
              🎥
              <span className="mt-2 text-sm">Video</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}