import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#244D3F] text-white py-12 mt-auto">
      
      {/* Top Section */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-3">KeenKeeper</h2>

        <p className="text-gray-200 mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <h3 className="font-semibold mb-4">Social Links</h3>

        {/* Icons */}
        <div className="flex justify-center gap-4">
          <div className="bg-white text-black p-3 rounded-full">
            <FaInstagram />
          </div>
          <div className="bg-white text-black p-3 rounded-full">
            <FaFacebookF />
          </div>
          <div className="bg-white text-black p-3 rounded-full">
            <FaTwitter />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-10"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 mt-6 px-6">
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
          <p className="cursor-pointer">Cookies</p>
        </div>
      </div>
    </footer>
  );
}