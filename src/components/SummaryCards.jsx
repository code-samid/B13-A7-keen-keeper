export default function SummaryCards({ friends, interactions }) {
  const onTrack = friends.filter(f => f.status === "on-track").length;
  const needAttention = friends.filter(f => f.status !== "on-track").length;

  return (
  <div className="grid md:grid-cols-4 gap-4 mb-10 container mx-auto">
    
    {/* Card 1 */}
    <div className="card bg-[#FFFFFF] p-8 flex flex-col items-center justify-center text-center shadow">
      <h2 className="text-3xl font-bold text-[#244D3F]">{friends.length}</h2>
      <p className="text-[#64748B] mt-2">Total Friends</p>
    </div>

    {/* Card 2 */}
    <div className="card bg-[#FFFFFF] p-8 flex flex-col items-center justify-center text-center shadow">
      <h2 className="text-3xl font-bold text-[#244D3F]">{onTrack}</h2>
      <p className="text-[#64748B] mt-2">On Track</p>
    </div>

    {/* Card 3 */}
    <div className="card bg-[#FFFFFF] p-8 flex flex-col items-center justify-center text-center shadow">
      <h2 className="text-3xl font-bold text-[#244D3F]">{needAttention}</h2>
      <p className="text-[#64748B] mt-2">Need Attention</p>
    </div>

    {/* Card 4 */}
    <div className="card bg-[#FFFFFF] p-8 flex flex-col items-center justify-center text-center shadow">
      <h2 className="text-3xl font-bold text-[#244D3F]">{interactions}</h2>
      <p className="text-[#64748B] mt-2">This Month</p>
    </div>

  </div>
);
}