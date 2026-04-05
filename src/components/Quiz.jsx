import { useEffect, useState } from "react";
import QuizCompleteImg from "/src/assets/quiz-complete.png";
import QUESTIONS from "/src/data.js";
function Quiz() {
  const [userAnswers, setUsersAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const isQuizOver = activeQuestionIndex === QUESTIONS.length;

  if (isQuizOver) {
    return (
      <div id="summary">
        <img src={QuizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex]?.answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  function handleSelectAnswer(ans) {
    console.log(ans);
    setUsersAnswers((prevAnswers) => {
      return [...prevAnswers, ans];
    });
  }

  return (
    <div id="quiz">
      <div className="question">
        <h2>{QUESTIONS[activeQuestionIndex]?.text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((ans) => (
            <li key={ans} className="answer">
              <button onClick={() => handleSelectAnswer(ans)}>{ans}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
