import React from 'react';

const CountOne = ({count, handleCount}) => {
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => handleCount(count + 1)}>Add</button>
    </div>
  );
};

export default CountOne;
