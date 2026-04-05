import { useEffect, useState } from "react";

function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout();
      console.log("timer set");

      setRemainingTime(timeout);
    }, [timeout]);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        return prevTime - 100;
      });
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} />;
}

export default QuestionTimer;
