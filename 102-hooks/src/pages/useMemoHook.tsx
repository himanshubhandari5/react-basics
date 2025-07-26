import React, { useState, useEffect, useMemo, useCallback } from 'react';

const getArray = () => {
  for (let i = 0; i < 1000000000; i++) {
    //do something expensive
  }
  return ['Expensive', 'Array'];
};

const UseMemoHook = () => {
  const [userNumber, setUserNumber] = useState(0);
  // randomInput is just taken to re-render the component
  // When the component will be re-rendered because of updation of randomInput,
  //    we wants to demonstrate that it won't call the fib function again
  //    because that is memoized
  const [randomInput, setRandomInput] = useState(0);

  const fib = useCallback((n: number): number => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }, []);

  const fibNumber = useMemo(() => fib(userNumber || 0), [userNumber, fib]);

  const myArray = useMemo(() => getArray(), []);

  useEffect(() => {
    console.log('New array');
  }, [myArray]);

  return (
    <main>
      <label>Fibonacci Sequence:</label>
      <input
        type="number"
        value={userNumber}
        placeholder="Position"
        onChange={(e) => setUserNumber(parseInt(e.target.value))}
      />
      {/* <p>Number: {fib(userNumber || 0)}</p> */}
      <p>Number: {fibNumber}</p>
      <br />
      <br />
      <label>Random Input:</label>
      <input
        type="text"
        value={randomInput}
        placeholder="Random Input"
        onChange={(e) => setRandomInput(parseInt(e.target.value) || 0)}
      />
      <p>{randomInput}</p>
    </main>
  );
};

export default UseMemoHook;
