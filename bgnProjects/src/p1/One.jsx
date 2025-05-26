import React, { useState } from 'react';
import './one.css';

const One = () => {
  const [count, setCount] = useState(0);
  return (
    <div id="one">
      <section>
        <h1>1. Simple Counter</h1>
        <div className="container-1">
          <button
            className={`${count < 1 && 'hidden'}`}
            onClick={() => {
              setCount(count - 1);
            }}
          >
            <span>-</span>
          </button>

          <p>{count}</p>

          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <span>+</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default One;
