import React, { useState } from "react";

function HookCounterTwo() {
  let initialState = 0;
  const [count, setCount] = useState(initialState);
  return (
    <div>
      <h1>{count}</h1>
      <button
        className="btn btn-success mr-2"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
      <button
        className="btn btn-danger mr-2"
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(initialState);
        }}
        className="btn btn-secondary "
      >
        Reset
      </button>
    </div>
  );
}

export default HookCounterTwo;
