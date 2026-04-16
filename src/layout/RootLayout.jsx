import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // smooth page switch loader

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">

      <Navbar />

      {/* ✅ GLOBAL LOADER */}
      {loading && (
        <div className="fixed inset-0 bg-white/60 flex items-center justify-center z-50">
          <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>
        </div>
      )}

      <div className="flex-grow">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}