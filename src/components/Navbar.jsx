import { NavLink } from "react-router-dom";
import { FaHome, FaClock, FaChartPie } from "react-icons/fa";

const navClass = ({ isActive }) =>
  `flex items-center gap-2 px-3 py-2 transition ${
    isActive
      ? "text-green-600 border-b-2 border-green-600"
      : "hover:text-green-500"
  }`;

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      <div className="flex-1 text-2xl font-bold text-green-700">
        KeenKeeper
      </div>

      {/* Desktop */}
      <div className="hidden md:flex gap-6">
        <NavLink to="/" className={navClass}><FaHome /> Home</NavLink>
        <NavLink to="/timeline" className={navClass}><FaClock /> Timeline</NavLink>
        <NavLink to="/stats" className={navClass}><FaChartPie /> Stats</NavLink>
      </div>

      {/* Mobile */}
      <div className="dropdown md:hidden">
        <label tabIndex={0} className="btn btn-ghost">☰</label>
        <ul className="menu dropdown-content mt-3 bg-base-100 shadow p-2">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/timeline">Timeline</NavLink></li>
          <li><NavLink to="/stats">Stats</NavLink></li>
        </ul>
      </div>
    </div>
  );
}