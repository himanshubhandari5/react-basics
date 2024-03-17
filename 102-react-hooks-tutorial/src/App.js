import "./App.css";
import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "./Hooks/useForms";
import { useFetch } from "./Hooks/useFetch";

/* function App() { */
const App = () => {
  /* Step-1: Simple Hooks */
  const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });
  const [{ count3 }, setCount3] = useState({ count3: 30 });
  /* Step-2: Custom Hook */
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  /* 
    Step-3: 
      Every time the component re-renders, useEffect's function will be called 
      This function is used to render less and for cleanup
      The square brackets takes the values, on which the useEffect depends on, so whenever these values change, useEffect function will call again
      More than one useEffects are allowed and they will be executed in order
  */
  useEffect(() => {
    console.log("render");

    return () => {
      console.log("cleanup function");
    };
  }, [values.email, values.password]);

  /* 
    Step: 4
  */
  const [number, setNumber] = useState(
    JSON.parse(localStorage.getItem("number"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${number}/trivia`);

  useEffect(() => {
    localStorage.setItem("number", JSON.stringify(number));
  }, [number]);

  return (
    <div>
      {/* {Step-1: Simple Hook} */}
      <div>
        <button
          onClick={() => {
            setCount((currentState) => ({
              ...currentState,
              count: count + 1,
            }));
            setCount3((currentState3) => ({
              ...currentState3,
              count3: count3 * 3,
            }));
          }}
        >
          +
        </button>
        <div>count1: {count}</div>
        <div>count2: {count2}</div>
        <div>count3: {count3}</div>
      </div>
      <hr />
      <h1>Form</h1>
      {/* {Step-2: Custom Hook} */}
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <hr />
      <div>{loading ? "loading..." : data}</div>
      <div>number: {number}</div>
      <button onClick={() => setNumber((c) => c + 1)}>Increment</button>
    </div>
  );
};

export default App;
