import React, { useState, useMemo } from "react";

interface ExpensiveComputationProps {
  num: number; // Explicitly typing the 'num' prop as 'number'
}

function ExpensiveComputation({ num }: ExpensiveComputationProps) {
  // A simple but expensive computation function
  function expensiveCalculation(n: number): number {
    console.log("Running expensive calculation...");
    return n * n;
  }

  // useMemo is used here to memoize the result of expensiveCalculation
  // It will only recompute the result when the 'num' dependency changes
  const squaredNum = useMemo(() => {
    return expensiveCalculation(num);
  }, [num]); // dependency array

  return (
    <div>
      <h3>Squared Number: {squaredNum}</h3>
    </div>
  );
}

function ExampleMemo() {
  const [number, setNumber] = useState<number>(1);
  const [increment, setIncrement] = useState<number>(0);

  // Increment function to demonstrate unrelated state change
  const handleIncrement = () => {
    setIncrement((prev) => prev + 1);
  };

  return (
    <div>
      <h1>useMemo Example</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <ExpensiveComputation num={number} />
      <button onClick={handleIncrement}>Increment Unrelated State</button>
      <p>Unrelated Increment: {increment}</p>
    </div>
  );
}

export default ExampleMemo;
