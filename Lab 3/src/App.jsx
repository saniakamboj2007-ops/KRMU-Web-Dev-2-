import { useState } from 'react'
import Header from './components/Header'
import StudentTable from './components/StudentTable'
import AddStudentForm from './components/AddStudentForm'

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Parth', score: 80 },
    { id: 2, name: 'Shreya', score: 32 },
    { id: 3, name: 'Savya', score: 67 }
  ])

  const updateScore = (id, newScore) => {
    setStudents(students.map(s =>
      s.id === id ? { ...s, score: Number(newScore) } : s
    ))
  }

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score)
    }
    setStudents([...students, newStudent])
  }

  const avg = Math.round(students.reduce((a,b)=>a+b.score,0)/students.length)
  const pass = students.filter(s=>s.score>=40).length
  const fail = students.length - pass

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white p-6">
      <div className="max-w-4xl mx-auto">
        <Header />

        <AddStudentForm addStudent={addStudent} />

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-[#0f3460] p-4 rounded-xl text-center">
            <p className="text-sm">Total</p>
            <h2 className="text-xl font-bold">{students.length}</h2>
          </div>
          <div className="bg-[#0f3460] p-4 rounded-xl text-center">
            <p className="text-sm">Avg Score</p>
            <h2 className="text-xl font-bold">{avg}</h2>
          </div>
          <div className="bg-[#0f3460] p-4 rounded-xl text-center">
            <p className="text-sm text-green-400">Passed</p>
            <h2 className="text-xl font-bold">{pass}</h2>
          </div>
          <div className="bg-[#0f3460] p-4 rounded-xl text-center">
            <p className="text-sm text-red-400">Failed</p>
            <h2 className="text-xl font-bold">{fail}</h2>
          </div>
        </div>

        <StudentTable students={students} updateScore={updateScore} />
      </div>
    </div>
  )
}

export default App
