import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LessonList from './components/LessonList'
import LessonDetail from './components/LessonDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LessonList />} />
        <Route path="/lessons/:id" element={<LessonDetail />} />
      </Routes>
    </Router>
  )
}

export default App
