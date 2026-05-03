import StudentRow from './StudentRow'

function StudentTable({ students, updateScore }) {
  return (
    <div className="bg-[#0f3460] rounded-xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-[#16213e] text-gray-300 text-sm">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3">Score</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <StudentRow key={student.id} student={student} updateScore={updateScore} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentTable

