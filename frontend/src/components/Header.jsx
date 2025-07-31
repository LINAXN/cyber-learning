import React from 'react';
import cyberVideo from '../assets/videos/cyberheader.mp4';

const LessonHeader = () => {
  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* 🎥 خلفية الفيديو */}
      <video
       autoPlay
    muted
    loop
    playsInline
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',  // عشان تكون الصورة أو الفيديو يغطي الشاشة بالكامل
      zIndex: 0,
        }}
      >
        <source src={cyberVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🌓 تظليل خفيف فوق الفيديو (اختياري) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      ></div>

      {/* ✅ المحتوى في المنتصف تمامًا */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          textAlign: 'center',
          color: 'white',
          padding: '0 20px',
        }}
      >
        <div>
          <h1 style={{ fontSize: '5.5rem', fontWeight: 'bold' }}>Cybersecurity </h1>
          <p style={{ fontSize: '0.70cm' }}>Explore modern cyber topics visually</p>
        </div>
      </div>
    </div>
  );
};

export default LessonHeader;
