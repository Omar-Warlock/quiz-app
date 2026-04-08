import { useCallback, useState } from "react";
import QuizCompleteImg from "/src/assets/quiz-complete.png";
import QUESTIONS from "/src/data.js";
import QuestionTimer from "./QuestionTimer";
function Quiz() {
  const [userAnswers, setUsersAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const isQuizOver = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(ans) {
      setAnswerState("answered");
      setUsersAnswers((prevAnswers) => {
        return [...prevAnswers, ans];
      });

      setTimeout(() => {
        if (ans === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex],
  );
  const handleAnsEmpty = useCallback(() => handleSelectAnswer(null), []);
  if (isQuizOver) {
    return (
      <div id="summary">
        <img src={QuizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <div className="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={15000}
          onTimeout={handleAnsEmpty}
        />

        <h2>{QUESTIONS[activeQuestionIndex]?.text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            const isSelected = userAnswers[userAnswers.length - 1] === answer;
            let cssClasses = "";

            if (answerState === "answered" && isSelected) {
              cssClasses = "selected";
            } else {
              cssClasses = "";
            }
            if (
              answerState === "correct" ||
              (answerState === "wrong" && isSelected)
            ) {
              cssClasses = answerState;
            }
            return (
              <li key={answer} className="answer ">
                <button
                  className={`${cssClasses}`}
                  onClick={() => handleSelectAnswer(answer)}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
{
  /*
  import { useCallback, useEffect, useState } from "react";
import QuizCompleteImg from "/src/assets/quiz-complete.png";
import QUESTIONS from "/src/data.js";
import QuestionTimer from "./QuestionTimer";
function Quiz() {
  const [userAnswers, setUsersAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const isQuizOver = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(ans) {
      setAnswerState("answered");
      setUsersAnswers((prevAnswers) => {
        return [...prevAnswers, ans];
      });

      setTimeout(() => {
        if (ans === QUESTIONS[activeQuestionIndex].answers[0]) {
          console.log(ans, "\n", QUESTIONS[activeQuestionIndex].answers[0]);
        } else {
          setAnswerState("wrong");
        }
        setTimeout(() => {
          setAnswerState("");
        }, 1005);
      }, 1000);
    },
    [activeQuestionIndex],
  );
  const handleAnsEmpty = useCallback(() => handleSelectAnswer(null), []);
  if (isQuizOver) {
    return (
      <div id="summary">
        <img src={QuizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }
  const [shuffledAnswers, setShuffledAnswers] = useState([
    ...QUESTIONS[activeQuestionIndex]?.answers,
  ]);
  useEffect(() => {
    setShuffledAnswers((shuffledAnswers) => {
      return shuffledAnswers.sort(() => Math.random() - 0.5);
    });
  }, []);

  return (
    <div id="quiz">
      <div className="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={3000}
          onTimeout={handleAnsEmpty}
        />

        <h2>{QUESTIONS[activeQuestionIndex]?.text}</h2>
        <ul id="answers">
          {shuffledAnswers.length > 0 &&
            shuffledAnswers.map((ans) => {
              const isSelected = userAnswers[userAnswers.length - 1] === ans;
              let styles = "";
              if (answerState === "answered" && isSelected) {
                styles = "selected";
              }
              if (
                answerState === "correct" ||
                (answerState === "wrong" && isSelected)
              ) {
                styles = answerState;
              }
              return (
                <li key={ans} className="answer">
                  <button
                    className={styles}
                    onClick={() => handleSelectAnswer(ans)}
                  >
                    {ans}
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
*/
}
