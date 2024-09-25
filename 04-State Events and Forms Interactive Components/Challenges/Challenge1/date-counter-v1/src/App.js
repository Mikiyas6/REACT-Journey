import { Fragment, useState } from "react";
import "./styles.css";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handlePreviousStep() {
    step >= 2 && setStep((step) => step - 1);
  }
  function handleNextStep() {
    setStep((step) => step + 1);
  }
  function handlePreviousCount() {
    setCount((count) => count - step);
  }
  function handleNextCount() {
    setCount((count) => count + step);
  }
  function getFormattedDate() {
    const currentDate = new Date(); // Get today's date
    currentDate.setDate(currentDate.getDate() + count); // Adjust the date based on the count value

    // Format the date to something like "Mon Jun 21 2027"
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return currentDate.toLocaleDateString("en-US", options); // Formats the date as "Mon Jun 21 2027"
  }
  return (
    <Fragment>
      <div>
        <button onClick={handlePreviousStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleNextStep}>+</button>
      </div>
      <div>
        <button onClick={handlePreviousCount}>-</button>
        <span>Count: {count} </span>
        <button onClick={handleNextCount}>+</button>
      </div>
      <p>
        {`${
          count === 0 ? "Today is" : `${count} days from today is`
        } ${getFormattedDate()}`}
      </p>
    </Fragment>
  );
}
