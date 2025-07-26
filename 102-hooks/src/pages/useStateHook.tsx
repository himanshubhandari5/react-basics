import { useState } from 'react';

const useStateHook = () => {
  const [count, setCount] = useState(0);
  const handlePlus = () => {
    console.log('A: ', count); // 0
    setCount((count) => ++count);
    console.log('B: ', count); // 0
    setCount((count) => ++count);
    console.log('C: ', count); // 0
  };
  const handleMinus = () => {
    // setCount((count) => --count);
    setCount(count - 1);
    setCount(count - 1); // This statement will be ignored, and count will be decreased by 1 only
    // Because setState works in batches, it will take it as one batch only
  };
  return (
    <div>
      <strong>{count}</strong>
      <br />
      <br />
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
};

export default useStateHook;
