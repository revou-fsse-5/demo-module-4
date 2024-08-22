import React, { useState, useCallback } from "react";

// Define a Child component that receives a callback function as a prop
interface ChildProps {
  onClick: () => void;
}

const ChildWithoutCallback: React.FC<ChildProps> = ({ onClick }) => {
  console.log("ChildWithoutCallback rendered");
  return <button onClick={onClick}>Without useCallback</button>;
};

const ChildWithCallback: React.FC<ChildProps> = React.memo(({ onClick }) => {
  console.log("ChildWithCallback rendered");
  return <button onClick={onClick}>With useCallback</button>;
});

function ExampleUseCallback() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");

  // Callback function that is not memoized
  const handleClickWithoutCallback = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Callback function that is memoized with useCallback
  const handleClickWithCallback = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  // Handle text input change
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>useCallback Example: Memoization vs Non-Memoization</h1>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Type something"
      />
      {/* Child component without memoization */}
      <ChildWithoutCallback onClick={handleClickWithoutCallback} />

      {/* Child component with memoization */}
      <ChildWithCallback onClick={handleClickWithCallback} />

      <p>Count: {count}</p>
    </div>
  );
}

export default ExampleUseCallback;
