import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import './LessonList.css';


const LessonList = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/lessons/')
      .then(response => setLessons(response.data))
      .catch(error => console.error('Error fetching lessons:', error));
  }, []);

  return (
    <>
      <Header />
      <div className="courses-section">
        <h2 className="section-title">📘 Cybersecurity Lessons</h2>
        <div className="courses-grid">
          {lessons.map(lesson => (
            <div key={lesson.id} className="course-card">
              <h3>{lesson.title}</h3>
              <p>{lesson.description || "Learn more about this topic."}</p>
              <Link to={`/lessons/${lesson.id}`} className="btn">View Lesson</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LessonList;
