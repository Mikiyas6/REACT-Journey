import { Fragment, useState } from "react";
import "./styles.css";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handlePreviousCount() {
    setCount((prevCount) => prevCount - step);
  }

  function handleNextCount() {
    setCount((prevCount) => prevCount + step);
  }

  function getFormattedDate() {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + count);

    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return currentDate.toLocaleDateString("en-US", options);
  }

  function handleType(e) {
    const value = e.target.value;

    // Allow empty input and prevent NaN issues
    if (value === "") {
      setCount(0);
    } else {
      setCount(Number(value));
    }
  }

  function handleSlide(e) {
    const value = e.target.value;
    setStep(Number(value));
  }

  function handleErase() {
    setStep(1);
    setCount(0);
  }

  return (
    <Fragment>
      <div>
        <input
          min="1"
          max="10"
          step="1"
          type="range"
          onChange={handleSlide}
          value={step}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={handlePreviousCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={handleType}
          placeholder="0"
        />
        <button onClick={handleNextCount}>+</button>
      </div>

      <p>
        {`${
          count === 0 ? "Today is" : `${count} days from today is`
        } ${getFormattedDate()}`}
      </p>

      {(step > 1 || count !== 0) && (
        <button onClick={handleErase}>Erase</button>
      )}
    </Fragment>
  );
}
