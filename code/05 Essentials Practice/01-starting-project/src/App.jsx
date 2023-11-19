import { useState } from "react";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIndetifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIndetifier]: +newValue, // + is a shortcut to convert a string to a number
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange}/>
      {!inputIsValid && <p className="center">Please enter a valid duration grater than zero.</p>}
      {inputIsValid && <Result input={userInput}/>}
    </>
  );
}

export default App;
