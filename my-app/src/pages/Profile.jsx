function Profile({ darkMode }) {
  const user = JSON.parse(localStorage.getItem("user"));

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
          My Profile
        </h1>

        <p
          className={`mt-2 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Manage your account and learning details
        </p>
      </div>

      <div
        className={`max-w-3xl rounded-3xl shadow-lg p-8 ${
          darkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 rounded-full bg-green-600 flex items-center justify-center text-white text-3xl font-bold">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              {user?.name}
            </h2>

            <p
              className={
                darkMode ? "text-gray-400" : "text-gray-500"
              }
            >
              {user?.email}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div
            className={`p-5 rounded-2xl ${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <h3 className="font-semibold">
              Enrolled Courses
            </h3>

            <p className="text-2xl font-bold text-green-600 mt-2">
              5
            </p>
          </div>

          <div
            className={`p-5 rounded-2xl ${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <h3 className="font-semibold">
              Completed Courses
            </h3>

            <p className="text-2xl font-bold text-green-600 mt-2">
              2
            </p>
          </div>

          <div
            className={`p-5 rounded-2xl md:col-span-2 ${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <h3 className="font-semibold">
              Overall Progress
            </h3>

            <div className="w-full bg-gray-300 h-4 rounded-full mt-4 overflow-hidden">
              <div
                className="h-4 rounded-full bg-linear-to-r from-green-500 to-pink-600"
                style={{ width: "65%" }}
              ></div>
            </div>

            <p className="mt-3 font-bold">
              65%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;