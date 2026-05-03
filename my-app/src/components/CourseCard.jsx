function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border hover:shadow-lg transition">
      <div className="flex justify-between items-center mb-4">
        <span className="bg-indigo-100 text-green-600 px-3 py-1 rounded-full text-sm">
          {course.category}
        </span>
      </div>

      <h2 className="text-2xl font-bold mb-4">
        {course.title}
      </h2>

      <div className="w-full bg-gray-200 h-2 rounded-full mb-3">
        <div
          className="h-2 rounded-full bg-green-600"
          style={{ width: `${course.progress}%` }}
        ></div>
      </div>

      <p className="text-gray-500">
        {course.progress}% Completed
      </p>

      <button
        className="mt-5 w-full bg-green-600 text-white py-3 rounded-xl"
      >
        Enroll Now
      </button>

      <input
        type="range"
        min="0"
        max="100"
        value={course.progress}
      />
    </div>
  );
}

export default CourseCard;