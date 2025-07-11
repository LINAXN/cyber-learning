import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header'; // Assuming you have a Header component
const LessonList = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/lessons/')
      .then(response => setLessons(response.data))
      .catch(error => console.error('Error fetching lessons:', error));
  }, []);

  return (
    <>
    <Header/> 
    <div className="lessons">
      <h2>📘 Cybersecurity Lessons</h2>
      <ul>
        {lessons.map(lesson => (
          <li key={lesson.id}>
            <h3>
              <Link to={`/lessons/${lesson.id}`}>{lesson.title}</Link>
            </h3>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default LessonList;
