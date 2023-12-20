import { useRef } from "react";

function Answers({ answers, selectedAnswer, answerState, onSelect }) {
    const shuffledAnswers = useRef();
    if (!shuffledAnswers.current) {
        // Shuffle the answers so they're not always in the same order
        // (Correct answer will always be the first one in the array)
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
          {shuffledAnswers.current.map((answer) => {
            const isSelected = selectedAnswer === answer;
            let cssClass = "";

            if (answerState === "answered" && isSelected) {
                cssClass = "selected";
            }

            if ((answerState === "correct" || answerState === "wrong") && isSelected) {
                cssClass = answerState;
            }

            return (
              <li key={answer} className="answer">
                <button
                  onClick={() => onSelect(answer)}
                  className={cssClass}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
    );
}

export default Answers;