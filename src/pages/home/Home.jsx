import useFriends from "../../hooks/useFriends";
import { useTimeline } from "../../context/TimelineContext";
import FriendCard from "../../components/FriendCard";
import SummaryCards from "../../components/SummaryCards";
import Banner from "../../components/Banner";

export default function Home() {
  const { friends } = useFriends();
  const { entries } = useTimeline();

  const thisMonth = entries.filter(e => {
    const d = new Date(e.date);
    const now = new Date();
    return d.getMonth() === now.getMonth();
  }).length;

  return (
    <div className="p-6 container mx-auto">

      <Banner />

      <SummaryCards friends={friends} interactions={thisMonth} />

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        {friends.map(f => (
          <FriendCard key={f.id} friend={f} />
        ))}
      </div>

    </div>
  );
}