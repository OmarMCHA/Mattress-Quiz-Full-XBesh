import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { QuizProvider } from './context/QuizContext'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Results from './pages/Results'
import Admin from './pages/Admin'
import AdminLink from './components/AdminLink'
import './App.css'

function App() {
  return (
    <QuizProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <AdminLink />
    </QuizProvider>
  )
}

export default App
