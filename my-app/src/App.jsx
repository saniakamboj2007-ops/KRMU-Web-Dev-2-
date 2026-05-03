import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./pages/Signup";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${darkMode
        ? "bg-black text-white"
        : "bg-white text-black"
        }`}
    >

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="px-4 py-3 flex justify-end">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-5 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/login" element={<Login darkMode={darkMode} />} />
        <Route path="/signup" element={<Signup darkMode={darkMode} />} />
        <Route path="/courses" element={<Courses darkMode={darkMode} />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard darkMode={darkMode} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile darkMode={darkMode} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;