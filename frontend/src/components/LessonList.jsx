import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // 👈 لا تنسي تستوردينه

const LessonList = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/lessons/')
      .then(response => setLessons(response.data))
      .catch(error => console.error('Error fetching lessons:', error));
  }, []);

  return (
    <div className="lessons">
      <h2>📘 Cybersecurity Lessons</h2>
      <ul>
        {lessons.map(lesson => (
          <li key={lesson.id}>
            <h3>
              <Link to={`/lessons/${lesson.id}`}>{lesson.title}</Link>
            </h3>
            <p>{lesson.description}</p>
            {lesson.video_url && (
              <iframe
                width="300"
                height="200"
                src={lesson.video_url}
                title={lesson.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonList;
