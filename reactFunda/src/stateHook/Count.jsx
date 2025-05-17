import React, { useState } from 'react';
import CountOne from './CountOne';
import CountTwo from './CountTwo';

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>State mutation through out components (Prop)</h3>
      <CountOne count={count} handleCount={setCount} />
      <CountTwo count={count} handleCount={setCount} />
    </div>
  );
};

export default Count;
