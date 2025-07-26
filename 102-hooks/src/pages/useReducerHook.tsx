import React, { useReducer } from 'react';

const initialState = { name: 'React Hooks', color: 'blue', count: 0 };

type stateType = {
  name: string;
  color: string;
  count: number;
};

type payloadType = {
  name: string;
};

type ACTIONS_TYPE = {
  type: string;
  payload?: payloadType;
};

const ACTIONS = {
  INCREAMENT: 'increament',
  DECREMENT: 'decrement',
  UPDATE_NAME: 'update_name',
  TOGGLE_COLOR: 'toggle_color',
  RESET_COUNT: 'reset',
};

const reducer = (state: stateType, action: ACTIONS_TYPE) => {
  switch (action.type) {
    case ACTIONS.INCREAMENT:
      console.log('inc: ', state.count);
      return { ...state, count: state.count + 1 };
    case ACTIONS.DECREMENT:
      console.log('dec: ', state.count);
      return { ...state, count: state.count - 1 };
    case ACTIONS.UPDATE_NAME:
      return { ...state, name: action.payload?.name ?? state.name };
    case ACTIONS.TOGGLE_COLOR:
      return { ...state, color: state.color === 'red' ? 'blue' : 'red' };
    case ACTIONS.RESET_COUNT:
      return { ...state, count: 0 };
    default:
      return { ...state, count: 0 };
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('=> ', e.target.value);
    dispatch({
      type: ACTIONS.UPDATE_NAME,
      payload: { name: e.target.value },
    });
  };

  const toggleColor = () => {
    // setColor(color === 'red' ? 'blue' : 'red')
    dispatch({ type: ACTIONS.TOGGLE_COLOR });
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <p style={{ color: state.color }}>name is: {state.name}</p>
      <button onClick={toggleColor}>Toggle Name's Color</button>
      <p>count: {state.count}</p>
      <button onClick={() => dispatch({ type: ACTIONS.INCREAMENT })}>+</button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET_COUNT })}>
        Reset Count
      </button>
    </>
  );
};

export default UseReducerHook;
