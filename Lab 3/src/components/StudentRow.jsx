function StudentRow({ student, updateScore }) {
  const status = student.score >= 40 ? 'Pass' : 'Fail'

  return (
    <tr className="border-b border-gray-700 hover:bg-[#16213e]">
      <td className="p-3">{student.name}</td>
      <td className="p-3 text-center">
        <input
          type="number"
          value={student.score}
          onChange={(e) => updateScore(student.id, e.target.value)}
          className="bg-transparent border border-gray-500 rounded px-2 py-1 w-16 text-center"
        />
      </td>
      <td className={`p-3 text-center font-semibold ${status === 'Pass' ? 'text-green-400' : 'text-red-400'}`}>
        {status}
      </td>
    </tr>
  )
}

export default StudentRow