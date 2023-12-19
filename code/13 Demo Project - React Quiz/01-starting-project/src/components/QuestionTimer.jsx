import { useState, useEffect } from "react";

function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  // Re-excetues when the timeout dependencies change (props)
  useEffect(() => {
    const timer = setTimeout(() => {
        onTimeout();
      }, timeout);

    return () => {
        clearTimeout(timer); // Cleanup function
    }
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
        setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
      }, 100);

    return () => {
        clearInterval(interval); // Cleanup function
    };
  }, []);

  return <progress max={timeout} value={remainingTime} />;
}

export default QuestionTimer;
