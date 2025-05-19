import { useReducer } from 'react';
import ReduceP from './ReduceP';
import Counter from './task/Counter';

const UseReducer = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'increment':
          return { ...state, count: state.count + 1 };
        case 'decrement':
          return { ...state, count: state.count - 1 };
        case 'reset':
          return { ...state, count: 0 };

        default:
          break;
      }
    },
    { count: 0 },
  );
  return (
    <div>
      <h2>UseReducer</h2>
      <div style={{ display: 'none' }}>
        <h3>Count: {state.count}</h3>
        <div>
          <button onClick={() => dispatch({ type: 'increment' })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: 'decrement' })}>
            Decrement
          </button>
          <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
        <ReduceP />
      </div>
      <Counter />
    </div>
  );
};

export default UseReducer;
