import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";



function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      className={`flex items-center justify-between px-10 py-5 shadow-md transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
    >
      {/* Logo */}
      <div>
        <Link
          to="/"
          className="text-3xl font-bold text-green-600"
        >
          SkillTrack
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <Link
          to="/"
          className="font-medium hover:text-green-600 transition"
        >
          Home
        </Link>

        <Link
          to="/courses"
          className="font-medium hover:text-green-600 transition"
        >
          Courses
        </Link>

        <Link
          to="/dashboard"
          className="font-medium hover:text-green-600 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/profile"
          className="font-medium hover:text-green-600 transition"
        >
          Profile
        </Link>

        {localStorage.getItem("isLoggedIn") ? (
          <>
            <span className="font-semibold">
              {JSON.parse(localStorage.getItem("user"))?.name}
            </span>

            <button
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                window.location.href = "/login";
              }}
              className="px-4 py-2 rounded-xl bg-pink-600 text-white hover:bg-pink-700 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 transition"
          >
            Login
          </Link>
        )}

        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-xl bg-gray-800 text-white hover:bg-gray-700 transition"
        >
          {darkMode ? "☀" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;