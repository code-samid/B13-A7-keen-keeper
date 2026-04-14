import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white p-10 mt-auto">
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-xl font-bold">KeenKeeper</h2>
          <p>Track meaningful friendships and stay connected.</p>
        </div>

        <div>
          <h3 className="font-bold">Links</h3>
          <p>Home</p>
          <p>Timeline</p>
          <p>Stats</p>
        </div>

        <div>
          <h3 className="font-bold">Social</h3>
          <div className="flex gap-4 text-xl">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm">
        © 2026 KeenKeeper. All rights reserved.
      </div>
    </footer>
  );
}