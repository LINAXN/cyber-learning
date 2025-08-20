import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './QuizPage.css';

function QuizPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const quiz = location.state?.quiz;

  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!quiz) {
    return (
      <div className="error-container">
        <div className="error-card">
          <div className="error-icon">⚠️</div>
          <p className="error-text">لم يتم العثور على الاختبار</p>
          <button
            onClick={() => navigate(-1)}
            className="error-button"
          >
            العودة
          </button>
        </div>
      </div>
    );
  }

  const question = quiz.questions[currentIndex];

  const handleAnswer = (questionId, answerId) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerId }));
  };

  const goNext = () => {
    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = () => {
    console.log("User answers:", answers);
    alert("تم تقديم الاختبار!");
    navigate(-1);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <div className="quiz-header">
          <h2 className="quiz-title">{quiz.title}</h2>
          <p className="quiz-progress">سؤال {currentIndex + 1} من {quiz.questions.length}</p>
        </div>
        
        <div className="quiz-content">
          <div className="question-container">
            <p className="question-text">
              {currentIndex + 1}. {question.text}
            </p>
          </div>
          
          <div className="answers-container">
            {question.answers.map(ans => (
              <label
                key={ans.id}
                className={`answer-label ${answers[question.id] === ans.id ? 'selected' : ''}`}
              >
                <input
                  type="radio"
                  name={`q-${question.id}`}
                  value={ans.id}
                  checked={answers[question.id] === ans.id}
                  onChange={() => handleAnswer(question.id, ans.id)}
                  className="answer-input"
                />
                <span className="answer-text">{ans.text}</span>
              </label>
            ))}
          </div>

          <div className="quiz-buttons">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="quiz-button prev"
            >
              السابق
            </button>

            {currentIndex < quiz.questions.length - 1 ? (
              <button
                onClick={goNext}
                disabled={!answers[question.id]}
                className="quiz-button next"
              >
                التالي
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!answers[question.id]}
                className="quiz-button submit"
              >
                إنهاء الاختبار
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;