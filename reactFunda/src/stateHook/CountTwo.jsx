import React from 'react';

const CountTwo = ({ count, handleCount }) => {
  return (
    <div>
      <h2>{count}</h2>
      <button
        onClick={() => {
          handleCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default CountTwo;
