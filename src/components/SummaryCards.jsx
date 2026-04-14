export default function SummaryCards({ friends, interactions }) {
  const onTrack = friends.filter(f => f.status === "on-track").length;
  const needAttention = friends.filter(f => f.status !== "on-track").length;

  return (
    <div className="grid md:grid-cols-4 gap-4 mb-10 container mx-auto">
      <div className="card bg-gradient-to-r from-green-400 to-green-600 text-white p-4">
        Total Friends: {friends.length}
      </div>
      <div className="card bg-green-200 p-4">
        On Track: {onTrack}
      </div>
      <div className="card bg-orange-200 p-4">
        Need Attention: {needAttention}
      </div>
      <div className="card bg-blue-200 p-4">
        This Month: {interactions}
      </div>
    </div>
  );
}