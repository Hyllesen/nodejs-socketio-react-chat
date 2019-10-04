import React, { useState, useCallback } from "react";
import Button from "./components/Button";

const functions = new Set();

const UseCallback = () => {
  const [delta, setDelta] = useState(1);
  const [c, setC] = useState(0);

  const incrementDelta = useCallback(() => setDelta(delta => delta + 1), []);
  const increment = useCallback(() => setC(c => c + delta), [delta]);

  functions.add(incrementDelta);
  functions.add(increment);

  return (
    <div>
      <div>Delta is {delta}</div>
      <div> Counter is {c}</div>
      <br />
      <div>
        <Button onClick={incrementDelta}>Increment Delta</Button>
        <Button onClick={increment}>Increment Counter</Button>
      </div>
      <br />
      <div>Newly Created Functions: {functions.size - 2}</div>
    </div>
  );
};

export default UseCallback;
