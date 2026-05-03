function Courses({ darkMode }) {
  const courses = [
    {
      id: 1,
      title: "Python Programming",
      lessons: 7,
      progress: 20,
      category: "Programming",
    },
    {
      id: 2,
      title: "Figma Designs",
      lessons: 18,
      progress: 60,
      category: "UI/UX",
    },
    {
      id: 3,
      title: "Java Basics",
      lessons: 20,
      progress: 55,
      category: "Programming",
    },
    {
      id: 4,
      title: "Data Structures",
      lessons: 15,
      progress: 50,
      category: "DSA",
    },
    {
      id: 5,
      title: "Machine Learning",
      lessons: 30,
      progress: 40,
      category: "AI",
    },
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
          My Courses
        </h1>

        <p
          className={`mt-2 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Track your enrolled courses and progress
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`rounded-3xl shadow-lg p-6 hover:scale-105 transition duration-300 ${
              darkMode ? "bg-gray-900" : "bg-white"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                {course.category}
              </span>

              <span className="font-semibold">
                {course.progress}%
              </span>
            </div>

            <h2 className="text-2xl font-bold mb-3">
              {course.title}
            </h2>

            <p
              className={`mb-5 ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-500"
              }`}
            >
              {course.lessons} Lessons
            </p>

            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div
                className="h-3 rounded-full bg-linear-to-r from-blue-500 to-purple-600"
                style={{
                  width: `${course.progress}%`,
                }}
              ></div>
            </div>

            <button className="w-full mt-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold">
              Continue Learning
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
