import { Link } from "react-router-dom";

function Home({ darkMode }) {
  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      <section className="px-10 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Upgrade Your Learning Journey With{" "}
              <span className="text-green-600">
                SkillTrack
              </span>
            </h1>

            <p
              className={`mt-6 text-lg ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              Elevate your education with smart tracking and modern management tools.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                to="/courses"
                className="px-6 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700"
              >
                Explore Courses
              </Link>

              <Link
                to="/dashboard"
                className="px-6 py-3 rounded-xl border border-gray-400"
              >
                Dashboard
              </Link>
            </div>
          </div>

          <div
            className={`p-8 rounded-3xl shadow-xl ${
              darkMode ? "bg-gray-900" : "bg-white"
            }`}
          >
            <h2 className="text-2xl font-bold mb-6">
              Learning Stats
            </h2>

            <div className="space-y-5">
              <div
                className={`p-4 rounded-2xl ${
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <h3 className="font-semibold">
                  Courses Enrolled
                </h3>
                <p className="text-3xl font-bold text-blue-600">
                  5
                </p>
              </div>

              <div
                className={`p-4 rounded-2xl ${
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <h3 className="font-semibold">
                  Completed
                </h3>
                <p className="text-3xl font-bold text-green-600">
                  2
                </p>
              </div>

              <div
                className={`p-4 rounded-2xl ${
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <h3 className="font-semibold">
                  Progress
                </h3>
                <p className="text-3xl font-bold text-violet-600">
                  65%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;