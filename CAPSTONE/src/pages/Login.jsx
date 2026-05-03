import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ darkMode }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No account found. Please Sign Up first.");
      return;
    }

    if (
      formData.email.trim() === savedUser.email &&
      formData.password.trim() === savedUser.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      <div
        className={`w-full max-w-md shadow-xl rounded-3xl p-8 ${
          darkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <h1 className="text-3xl font-bold text-center mb-8">
          Login to SkillTrack
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 rounded-xl border ${
              darkMode
                ? "bg-gray-800 text-white border-gray-700"
                : "bg-white text-black border-gray-300"
            }`}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full p-3 rounded-xl border ${
              darkMode
                ? "bg-gray-800 text-white border-gray-700"
                : "bg-white text-black border-gray-300"
            }`}
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-green-600 text-white hover:bg-green-700"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center">
          New user?{" "}
          <Link to="/signup" className="text-green-600 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;