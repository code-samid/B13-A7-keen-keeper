import { FaUserPlus } from "react-icons/fa";

export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-green-500 to-emerald-700 text-white rounded-2xl p-10 text-center mb-10 shadow-md container mx-auto">
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Keep Your Friendships Alive
      </h1>

      <p className="text-lg md:text-xl mb-6 opacity-90">
        Your personal shelf of meaningful connections. Track, nurture, and never lose touch with the people who matter most.
      </p>

      <button className="btn bg-white text-green-700 hover:bg-gray-100 border-none gap-2">
        <FaUserPlus /> Add a Friend
      </button>

    </div>
  );
}