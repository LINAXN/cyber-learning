import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import './LessonList.css';
import phishingImg from '../assets/images/phishing.jpeg';
import SocialImg from '../assets/images/Social-Engineering.png';
import passwordImg from '../assets/images/password.jpg';
import sqlImg from '../assets/images/sql.jpg';
import malwareImg from '../assets/images/malware.jpg';

// import defaultImg from './assets/default.jpg';

const LessonList = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/lessons/')
      .then(response => setLessons(response.data))
      .catch(error => console.error('Error fetching lessons:', error));
  }, []);

    const images = {
    1: phishingImg,
    2: malwareImg,
    3: SocialImg,
    4: passwordImg,
    5: sqlImg,
  };

  return (
    <>
      <Header />
        <div className="courses-section">
      <h2 className="section-title">📘 Cybersecurity Lessons</h2>
      <div className="courses-grid">
        {lessons.map(lesson => (
          <div className="course-card" key={lesson.id}>
            <img 
  src={images[lesson.id] || '/default-course.jpg'} 
  alt={lesson.title} 
  className="course-img" 
/>

            <h3>{lesson.title}</h3>
            <Link to={`/lessons/${lesson.id}`} className="btn">
              View Lesson
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default LessonList;
