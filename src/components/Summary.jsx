import { useEffect } from "react";
import QuizCompleteImg from "/src/assets/quiz-complete.png";
import QUESTIONS from "../data";

function Summary({ userAnswers }) {
  useEffect(() => {
    console.log(userAnswers);
  }, []);

  // ✅ الحسابات
  const totalQuestions = userAnswers.length;

  const skippedAnswers = userAnswers.filter((ans) => ans === null).length;

  const correctAnswers = userAnswers.filter(
    (ans, index) =>
      ans !== null && ans.selectedAnswer === QUESTIONS[index].answers[0],
  ).length;

  const wrongAnswers = totalQuestions - skippedAnswers - correctAnswers;

  const skippedPercentage = Math.round((skippedAnswers / totalQuestions) * 100);

  const correctPercentage = Math.round((correctAnswers / totalQuestions) * 100);

  const wrongPercentage = Math.round((wrongAnswers / totalQuestions) * 100);

  return (
    <div id="summary">
      <img src={QuizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed</h2>

      <div id="summary-stats">
        <p>
          <span className="number">{skippedPercentage}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctPercentage}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongPercentage}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>

      <ol>
        {userAnswers.map((ans, index) => {
          let cssClasses = "user-answer";

          if (ans === null) {
            cssClasses += " skipped";
          } else if (ans.selectedAnswer === QUESTIONS[index].answers[0]) {
            cssClasses += " correct";
          } else {
            cssClasses += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="questions">{QUESTIONS[index].text}</p>
              <p className={cssClasses}>
                {ans ? ans.selectedAnswer : "Skipped"}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Summary;
