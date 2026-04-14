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

  return (
    <div className="grid md:grid-cols-2 gap-6 p-6">

      {/* LEFT */}
      <div className="card p-6 shadow">
        <img src={friend.picture} className="w-24 rounded-full" />
        <h2 className="text-2xl font-bold mt-2">{friend.name}</h2>

        <p className="mt-2">{friend.bio}</p>
        <p className="text-sm text-gray-500">{friend.email}</p>

        <div className="mt-3 flex gap-2">
          {friend.tags.map(tag => (
            <span key={tag} className="badge">{tag}</span>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <button className="btn btn-warning">Snooze</button>
          <button className="btn">Archive</button>
          <button className="btn btn-error">Delete</button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="space-y-4">

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="card p-4 bg-base-200">
            {friend.days_since_contact} Days
          </div>
          <div className="card p-4 bg-base-200">
            Goal: {friend.goal}
          </div>
          <div className="card p-4 bg-base-200">
            Due: {friend.next_due_date}
          </div>
        </div>

        {/* Goal */}
        <div className="card p-4">
          <p>Connect every {friend.goal} days</p>
          <progress className="progress progress-success w-full"
            value={friend.days_since_contact}
            max={friend.goal}></progress>
        </div>

        {/* Actions */}
        <div className="card p-4 flex gap-3">
          <button onClick={() => handle("Call")} className="btn btn-primary flex-1">Call</button>
          <button onClick={() => handle("Text")} className="btn btn-secondary flex-1">Text</button>
          <button onClick={() => handle("Video")} className="btn btn-accent flex-1">Video</button>
        </div>

      </div>
    </div>
  );
}