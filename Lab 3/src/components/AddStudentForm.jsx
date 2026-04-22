import { useState } from 'react'

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState('')
  const [score, setScore] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || score === '') return
    addStudent(name, score)
    setName('')
    setScore('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6 bg-[#0f3460] p-4 rounded-xl">
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1 bg-transparent border border-gray-500 rounded px-3 py-2"
      />

      <input
        type="number"
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        className="w-24 bg-transparent border border-gray-500 rounded px-3 py-2"
      />

      <button className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-600">
        + Add
      </button>
    </form>
  )
}

export default AddStudentForm
