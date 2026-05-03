function Dashboard({ darkMode }) {
  const stats = [
    { title: "Total Courses", value: 5 },
    { title: "Completed Courses", value: 1 },
    { title: "Pending Courses", value: 4 },
    { title: "Overall Progress", value: "45%" },
  ];

  return (
    <div
      className={`min-h-screen px-10 py-8 transition-all duration-300 ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p
          className={`mt-2 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Overview of your learning journey
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-10">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-3xl shadow-lg ${
              darkMode ? "bg-gray-900" : "bg-white"
            }`}
          >
            <h2
              className={`text-lg font-semibold ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-500"
              }`}
            >
              {item.title}
            </h2>

            <p className="text-3xl font-bold mt-4 text-green-600">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div
        className={`rounded-3xl shadow-lg p-8 ${
          darkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <h2 className="text-2xl font-bold mb-6">
          Recent Activity
        </h2>

        <div className="space-y-4">
          <div
            className={`p-4 rounded-2xl ${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            Completed UI/UX Design module
          </div>

          <div
            className={`p-4 rounded-2xl ${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            Continued Python Programming course
          </div>

          <div
            className={`p-4 rounded-2xl ${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            Started Machine Learning basics
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;