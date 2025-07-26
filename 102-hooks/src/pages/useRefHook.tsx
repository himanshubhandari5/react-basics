import React, { useState, useRef } from 'react';

const UseRefHook = () => {
  const [name, setName] = useState('');
  const [timeCounter, setTimeCounter] = useState(0);

  const componentRenderCntRef = useRef(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const timerId = useRef<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    componentRenderCntRef.current++;
  };

  const startTimer = () => {
    componentRenderCntRef.current++;
    timerId.current = setInterval(() => {
      setTimeCounter((timeCounter) => timeCounter + 1);
    }, 1000);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const stopTimer = () => {
    if (timerId.current) {
      clearInterval(timerId.current);
    }
    timerId.current = 0;
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const resetTimer = () => {
    stopTimer();
    if (timeCounter > 0) {
      componentRenderCntRef.current++;
      setTimeCounter(() => 0);
    }
  };

  return (
    <>
      <hr />
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={handleChange}
        ref={inputRef}
      />
      <section> Name is: {name}</section>
      <hr />
      <strong>
        Component is renderd {componentRenderCntRef.current} times.
      </strong>
      <hr />
      <hr />
      <section>
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={stopTimer}>Stop Timer</button>
        <button onClick={resetTimer}>Reset Timer</button>
      </section>
      <div>TimeCounter: {timeCounter}</div>
    </>
  );
};

export default UseRefHook;
