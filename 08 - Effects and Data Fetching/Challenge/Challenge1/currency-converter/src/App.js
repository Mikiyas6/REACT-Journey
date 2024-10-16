// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState, useEffect } from "react";

export default function App() {
  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [output, setOutput] = useState("");

  function handleInput(e) {
    const result = e.target.value;
    setAmount(e.target.value);
  }

  function handleFrom(e) {
    setFrom(e.target.value);
  }
  function handleTo(e) {
    setTo(e.target.value);
  }

  useEffect(
    function () {
      const controller = new AbortController();
      const signal = controller.signal;
      async function fetchData() {
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&base=${from}&symbols=${to}`,
            { signal }
          );

          if (!res.ok)
            throw new Error("Something wrong with fetching your input");
          const data = await res.json();
          const result = data.rates[to];
          setOutput(result);
        } catch (err) {
          if (err.message === "AbortError") console.log(err.message);
          else console.error(err);
        }
      }
      if (from === to) {
        setOutput("Currencies can not be the same");
      }
      fetchData();
    },
    [from, to, amount]
  );

  return (
    <div>
      <input value={amount} type="text" onChange={handleInput} />
      <select value={from} onChange={handleFrom}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={to} onChange={handleTo}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{output}</p>
    </div>
  );
}
