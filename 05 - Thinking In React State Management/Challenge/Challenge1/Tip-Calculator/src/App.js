import { Fragment, useState } from "react";
import "./styles.css";

export default function App() {
  const [billAmount, setBillAmount] = useState('');
  const [myPercentage, setMyPercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);
  const hasValue = billAmount > 0 || myPercentage > 0 || friendPercentage > 0;
  console.log(billAmount);
  function handleChangeBillAmount(e) {
    const amount = +e.target.value;
    if (amount < 0) {
      setBillAmount('');
      alert("Bill amount can never be negative value");
    } else setBillAmount(amount);
  }
  function handleMyPercentage(e) {
    setMyPercentage(+e.target.value);
  }
  function handleFriendPercentage(e) {
    setFriendPercentage(+e.target.value);
  }
  function handleErase() {
    setBillAmount('');
    setMyPercentage(0);
    setFriendPercentage(0);
  }
  return (
    <div className="App">
      <BillInput
        billAmount={billAmount}
        handleChangeBillAmount={handleChangeBillAmount}
      />
      <SelectPercentage
        whose={"you"}
        handlePercentage={handleMyPercentage}
        percentage={myPercentage}
      >
        How do you like our service
      </SelectPercentage>
      <SelectPercentage
        whose={"your friend"}
        handlePercentage={handleFriendPercentage}
        percentage={friendPercentage}
      >
        How do your friend like our service
      </SelectPercentage>
      <Output
        billAmount={billAmount}
        myPercentage={myPercentage}
        friendPercentage={friendPercentage}
        hasValue={hasValue}
      />
      <Reset handleErase={handleErase} hasValue={hasValue} />
    </div>
  );
}

function BillInput({ handleChangeBillAmount, billAmount }) {
  return (
    <div>
      <label>
        How much was the bill?
        <input
          type="number"
          step="0.1"
          value={billAmount}
          placeholder="Bill value"
          onChange={(e) => handleChangeBillAmount(e)}
        />
      </label>
    </div>
  );
}

function SelectPercentage({ whose, handlePercentage, percentage, children }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={(e) => handlePercentage(e)}>
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was Good(10%)</option>
        <option value="20">Absolutely Amazing!(20%)</option>
      </select>
    </div>
  );
}

function Output({ billAmount, myPercentage, friendPercentage, hasValue }) {
  if (!hasValue) return;
  const tipAmount = billAmount * ((myPercentage + friendPercentage) / 2 / 100);
  const total = billAmount + tipAmount;
  return (
    <p>
      You pay ${total} (${billAmount} +${tipAmount} tip)
    </p>
  );
}

function Reset({ handleErase, hasValue }) {
  if (!hasValue) return;
  return <button onClick={handleErase}>Reset</button>;
}
