import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function LessonDetail() {
  const { id } = useParams()
  const [lesson, setLesson] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:8000/api/lessons/${id}/`)
      .then(response => setLesson(response.data))
      .catch(error => console.error('Error fetching lesson:', error))
  }, [id])

  if (!lesson) return <p>Loading...</p>

  return (
    <div className="lesson-detail">
      <h2>{lesson.title}</h2>
      <p><strong>Description:</strong> {lesson.description}</p>
      <p><strong>Example:</strong> {lesson.example}</p>
      {lesson.video_url && (
        <div>
          <h4>Video:</h4>
          <iframe
            width="560"
            height="315"
            src={lesson.video_url}
            title="Lesson Video"
            allowFullScreen
          />
        </div>
      )}
    </div>
  )
}

export default LessonDetail
