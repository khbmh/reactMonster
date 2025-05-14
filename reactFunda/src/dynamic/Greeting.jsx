import React from 'react';

const Greeting = () => {
  const greetingMsg = 'good evening';
  const today = new Date().toLocaleString();
  return (
    <div>
      <h1>{greetingMsg}</h1>
      <p>{today}</p>
    </div>
  );
};

export default Greeting;
