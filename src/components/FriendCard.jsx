import { useNavigate } from "react-router-dom";

export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  const badge =
  friend.status === "overdue"
    ? "bg-[#EF4444] text-white px-3 py-1 text-xs rounded-full"
    : friend.status === "almost due"
    ? "bg-[#EFAD44] text-white px-3 py-1 text-xs rounded-full"
    : "bg-[#244D3F] text-white px-3 py-1 text-xs rounded-full";

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="card bg-base-100 shadow hover:shadow-lg p-5 cursor-pointer transition items-center text-center"
    >
      <img src={friend.picture} className="w-16 rounded-full" />
      <h2 className="font-bold mt-2">{friend.name}</h2>
      <p className="text-sm">{friend.days_since_contact} days ago</p>

      <div className="flex gap-2 mt-2">
        {friend.tags.slice(0, 2).map(tag => (
          <span key={tag} className="badge badge-outline px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">{tag}</span>
        ))}
      </div>

      <div className={`badge mt-3 ${badge}`}>
        {friend.status}
      </div>
    </div>
  );
}