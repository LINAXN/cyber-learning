import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LessonList from './components/LessonList'
import LessonDetail from './components/LessonDetail'
import QuizPage from './components/QuizPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LessonList />} />
        <Route path="/lessons/:id" element={<LessonDetail />} />
  <Route path="/quiz/:lessonId" element={<QuizPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />

      </Routes>
    </Router>
  )
}

export default App
