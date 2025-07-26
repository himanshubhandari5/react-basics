import { useState, useRef, useLayoutEffect } from 'react';
// import { useEffect } from 'react';

const UseLayoutEffectHook = () => {
  const [number, setNumber] = useState(0);
  const [sectionStyle, setSectionStyle] = useState({});
  const sectionRef = useRef(null);

  /* 
  useEffect is asynchronous. 
  You see the number change in the DOM before the padding changes. 

  useLayoutEffect is synchronous. 
  You see the number change only after the padding has changed.
  */

  // change to useLayoutEffect to see the difference
  // UPDATE: It seems some error: With React-19, I find no difference
  useLayoutEffect(() => {
    // useEffect(() => {
    const random = Math.floor(Math.random() * 500);

    /* loop is just to make the changes in this example slow enough to be observable */
    for (let i = 0; i <= 100000000; i++) {
      if (i === 100000000)
        setTimeout(() => setSectionStyle({ paddingTop: `${random}px` }), 1000);
    }
  }, [number]);

  return (
    <main className="App">
      <section ref={sectionRef} style={sectionStyle}>
        <p>{number}</p>
        <div>
          <button onClick={() => setNumber((prev) => prev - 1)}>-</button>
          <button onClick={() => setNumber((prev) => prev + 1)}>+</button>
        </div>
      </section>
    </main>
  );
};

export default UseLayoutEffectHook;
