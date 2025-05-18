import React from 'react';
import Market from './Market';

const Field = ({ staple }) => {
  return (
    <div style={{ border: '1px solid skyblue', padding: '8px' }}>
      <h3>field</h3>
      <Market staple={staple} />
    </div>
  );
};

export default Field;
