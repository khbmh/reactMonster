import React from 'react';
import Field from './Field';

const PropDrill = () => {
  const staple = 'rice';
  return (
    <div style={{ border: '1px solid skyblue', padding: '8px' }}>
      <h2>Props Drilling</h2>
      <p>staple = rice variable created here</p>
      <Field staple={staple} />
    </div>
  );
};

export default PropDrill;
