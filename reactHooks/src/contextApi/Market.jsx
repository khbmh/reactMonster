import React, { useContext } from 'react';
import Kitchen from './Kitchen';
import { Data } from './ContextApi';

const Market = () => {
  const { num } = useContext(Data);
  return (
    <div style={{ border: '1px solid skyblue', padding: '8px' }}>
      <h3>Market</h3>
      <p>
        this num is from context:{' '}
        <span style={{ color: 'salmon' }}>{num}</span>
      </p>
      <Kitchen />
    </div>
  );
};

export default Market;
