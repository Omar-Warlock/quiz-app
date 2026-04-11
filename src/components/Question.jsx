import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import QUESTIONS from "../data";

function Question({ questionIndex, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;
  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(selectedAnswer) {
    setAnswer({
      selectedAnswer,
      isCorrect: null,
    });

    setTimeout(() => {
      const isCorrectAns =
        QUESTIONS[questionIndex].answers[0] === selectedAnswer;

      const updatedAnswer = {
        selectedAnswer,
        isCorrect: isCorrectAns,
      };

      setAnswer(updatedAnswer);

      setTimeout(() => {
        onSelectAnswer(updatedAnswer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div className="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answerState === "" ? onSkipAnswer : null}
        mode={answerState}
      />

      <h2>{QUESTIONS[questionIndex].text}</h2>

      <Answers
        onSelect={handleSelectAnswer}
        answers={QUESTIONS[questionIndex].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
      />
    </div>
  );
}

export default Question;
