import { useCallback, useState } from "react";
import QUESTIONS from "/src/data.js";
import Question from "./Question";
import Summary from "./Summary";

function Quiz() {
  const [userAnswers, setUsersAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const isQuizOver = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((ans) => {
    setUsersAnswers((prev) => [...prev, ans]);
  }, []);

  const handleAnsEmpty = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (isQuizOver) {
    console.log(userAnswers);
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleAnsEmpty}
      />
    </div>
  );
}

export default Quiz;
