import { useState, useEffect, useCallback } from 'react';

const UseCallbackHook = () => {
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState<number[]>([]);
  const [num1] = useState(4);
  const [num2] = useState(5);

  //const sum = useCallback(() => num1 + num2, [num1, num2]);
  const buildArray = useCallback(() => [num1, num2], [num1, num2]);

  useEffect(() => {
    console.log(`New array: ${buildArray()}`);
    setResult(buildArray());
  }, [buildArray]);

  return (
    <main>
      <input
        type="text"
        placeholder="input"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <h1>Output: {userInput || '--'}</h1>
      <p>Result: {JSON.stringify(result)}</p>
    </main>
  );
};

export default UseCallbackHook;
