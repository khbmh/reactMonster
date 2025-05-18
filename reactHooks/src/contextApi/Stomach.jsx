import React, { useContext } from 'react';
import { Data } from './ContextApi';

const Stomach = () => {
  const { staple } = useContext(Data);
  return (
    <div style={{ border: '1px solid skyblue', padding: '8px' }}>
      <h3>Stomach</h3>
      <p>staple variable used here via context api Hook in salmon color</p>
      <p style={{ color: 'salmon' }}>{staple}</p>
    </div>
  );
};

export default Stomach;
