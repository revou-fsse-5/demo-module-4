import React, { useRef, useState } from "react";

function ExampleRef() {
  const inputRef = useRef<HTMLInputElement>(null);
  const prevValueRef = useRef("");
  const [value, setValue] = useState("");

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Only call focus if inputRef.current is not null
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    prevValueRef.current = value;
    setValue(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>useRef Example</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Type something..."
          style={{ padding: "8px", fontSize: "16px" }}
        />
      </div>

      <button
        onClick={handleFocus}
        style={{ padding: "8px 16px", fontSize: "16px" }}
      >
        Focus Input
      </button>

      <div style={{ marginTop: "20px" }}>
        <p>Current Value: {value}</p>
        <p>Previous Value: {prevValueRef.current}</p>
      </div>
    </div>
  );
}

export default ExampleRef;
