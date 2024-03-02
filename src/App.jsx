import axios from 'axios'
import './App.css'
import { useEffect } from 'react'

function App() {
  const fetchCourses = async () => {
    await axios.get("http://localhost:3000/courses")
  }
  useEffect(() => {
    fetchCourses();
  }, [])
  return (
    <>
    </>
  )
}

export default App
