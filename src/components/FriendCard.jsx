import { useNavigate } from "react-router-dom";

export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  const badge =
    friend.status === "overdue"
      ? "badge-error"
      : friend.status === "almost due"
      ? "badge-warning"
      : "badge-success";

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
          <span key={tag} className="badge badge-outline">{tag}</span>
        ))}
      </div>

      <div className={`badge mt-3 ${badge}`}>
        {friend.status}
      </div>
    </div>
  );
}