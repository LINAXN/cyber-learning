import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
    <div className="lesson-detail" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>
        📘 {lesson.title}
      </h1>

      {lesson.video_url && (
        <div style={{ marginBottom: '20px' }}>
          <iframe
            width="100%"
            height="400"
            src={lesson.video_url}
            title={lesson.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div style={{ marginBottom: '20px' }}>
        <h2>📝 Description</h2>
        <p>{lesson.description}</p>
      </div>

      <div style={{ backgroundColor: '#d5a4f1ff', padding: '15px', borderRadius: '8px', marginBottom: '30px' }}>
        <h2>💡 Example</h2>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{lesson.example}</pre>
      </div>
  {/* زر للذهاب للكويز، إذا فيه كويز */}
      {lesson.quizzes.length > 0 && (
        <Link to={`/quiz/${lesson.id}`} state={{ quiz: lesson.quizzes[0] }}>
          <button className="bg-purple-600 text-white px-4 py-2 mt-4 rounded" style={{ textAlign: 'center' }}>
            Start Quiz 🚀
          </button>
        </Link>
      )}
      {lesson.quizzes.length === 0 && (
        <p>No quizzes available for this lesson.</p>
      )}
    </div>
  );
}

export default LessonDetail
