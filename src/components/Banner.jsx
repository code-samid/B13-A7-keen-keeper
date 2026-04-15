import { FaUserPlus } from "react-icons/fa";

export default function Banner() {
    return (
  <div className="bg-[#F8FAFC] py-16 text-center">

    {/* Centered content */}
    <div className="max-w-3xl mx-auto px-4">

      {/* Heading */}
      <h1 className="text-[44px] md:text-[47px] font-bold text-[#1F2937] leading-tight mb-4">
        Friends to keep close in your life
      </h1>

      {/* Subtitle */}
      <p className="text-[16px] text-[#64748B] max-w-xl mx-auto mb-8 leading-relaxed">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>

      {/* Button */}
      <button className="bg-[#244D3F] text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 mx-auto hover:opacity-90 transition">
        <FaUserPlus /> Add a Friend
      </button>

    </div>

  </div>
);
}