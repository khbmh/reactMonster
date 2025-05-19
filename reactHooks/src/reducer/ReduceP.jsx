import React, { useReducer } from 'react';

const ReduceP = () => {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + 5 };
      case 'decrement':
        return { ...state, count: state.count - 5 };
      case 'reset':
        return { ...state, count: 0 };

      default:
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>Another</h3>
      <p>{state.count}</p>
      <div>
        <button
          onClick={() => {
            dispatch({ type: 'increment' });
          }}
        >
          +5
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'decrement' });
          }}
        >
          -5
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'reset' });
          }}
        >
          Rst
        </button>
      </div>
    </div>
  );
};

export default ReduceP;
