import { useState } from 'react';
import { useEffect } from 'react';

const UseEffectHook = () => {
  // let localNumber;
  // if (localStorage.getItem('number') != null) {
  //   localNumber = JSON.parse('number');
  // }
  const [number, setNumber] = useState(
    JSON.parse(localStorage.getItem('number') || '') || 0
  );

  useEffect(() => {
    console.log(localStorage.getItem('number'));
    console.log('useEffect called in render: ', number);
    localStorage.setItem('number', JSON.stringify(number));
    return () => {
      console.log('cleanup function');
    };
  }, [number]);

  return (
    <div>
      <div>Number: {number}</div>
      <button onClick={() => setNumber((c: number) => c + 1)}>Increment</button>
    </div>
  );
};

export default UseEffectHook;
