import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function QuizPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const quiz = location.state?.quiz;

  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!quiz) {
    return (
      <div className="p-6 text-center min-h-screen flex flex-col justify-center items-center bg-gray-50">
        <p className="text-red-500 text-lg font-semibold mb-4">Quiz not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
        >
          Go Back
        </button>
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
    alert("Quiz submitted!");
    navigate(-1)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-300 flex justify-center items-center px-4 py-12">
      <div className="bg-white shadow-xl rounded-2xl max-w-xl w-full p-8">
        <h2 className="text-2xl font-extrabold mb-6 text-purple-800 text-center">
          {quiz.title}
        </h2>

        <div className="border border-purple-300 rounded-lg p-6 mb-6 shadow hover:shadow-lg transition">
          <p className="font-semibold mb-4 text-lg text-purple-700">
            {currentIndex + 1}. {question.text}
          </p>
          <div className="space-y-4">
            {question.answers.map(ans => (
              <label
                key={ans.id}
                className="flex items-center cursor-pointer space-x-3 text-gray-800 hover:text-purple-700 transition"
              >
                <input
                  type="radio"
                  name={`q-${question.id}`}
                  value={ans.id}
                  checked={answers[question.id] === ans.id}
                  onChange={() => handleAnswer(question.id, ans.id)}
                  className="form-radio text-purple-600 focus:ring-purple-500"
                />
                <span>{ans.text}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className={`px-6 py-2 rounded-xl font-semibold text-white transition 
              ${currentIndex === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-700 hover:bg-purple-800'}`}
          >
            Previous
          </button>

          {currentIndex < quiz.questions.length - 1 ? (
            <button
              onClick={goNext}
              disabled={!answers[question.id]}
              className={`px-6 py-2 rounded-xl font-semibold text-white transition 
                ${!answers[question.id] ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-700 hover:bg-purple-800'}`}
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!answers[question.id]}
              className={`px-6 py-2 rounded-xl font-bold text-white transition shadow-lg
                ${!answers[question.id] ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-700 hover:bg-purple-800'}`}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
