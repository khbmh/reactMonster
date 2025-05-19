import { useReducer, useState } from 'react';
import { initialState, reducer } from './counterReducer';
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState('');
  const handleAdd = () => {
    setValue('');
    dispatch({ type: 'incrementByInput', payload: value });
  };
  const handleSubtract = () => {
    setValue('');
    dispatch({ type: 'decrementByInput', payload: value });
  };
  return (
    <div style={{border:'1px solid beige', padding:'0px 10px 15px 10px', borderRadius:'10px'}}>
      <h2>Counter task</h2>
      <h3>Count: {state.count}</h3>
      <button
        onClick={() => {
          dispatch({ type: 'increment' });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'decrement' });
        }}
      >
        Decrement
      </button>
      <br />
      <input
        type="number"
        value={value}
        placeholder="enter a num"
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
    </div>
  );
};

export default Counter;
