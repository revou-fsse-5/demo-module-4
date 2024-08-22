import React, { useState, useCallback } from "react";

// Define a Child component that receives a callback function as a prop
interface ChildProps {
  onClick: () => void; // Explicitly type the onClick prop as a function returning void
  label: string; // Label for the button to distinguish between memoized and non-memoized functions
}

const Child: React.FC<ChildProps> = React.memo(({ onClick, label }) => {
  console.log(`${label} Child component rendered`);
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
    >
      {label} Button
    </button>
  );
});

function ExampleCallback() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");

  // Memoized function using useCallback
  // This function will only be recreated if 'count' changes
  const memoizedHandleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  // Non-memoized function
  const nonMemoizedHandleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // This function is not memoized, so it will cause the Child component to re-render every time
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">useCallback Example</h1>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Type something"
        className="w-full px-3 py-2 mb-4 border rounded"
      />

      {/* Child component with memoized callback function */}
      <Child onClick={memoizedHandleClick} label="Memoized" />

      {/* Child component with non-memoized callback function */}
      <Child onClick={nonMemoizedHandleClick} label="Non-Memoized" />

      <p className="mt-4 text-lg font-semibold">Count: {count}</p>
    </div>
  );
}

export default ExampleCallback;
