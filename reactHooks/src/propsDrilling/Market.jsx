import React from 'react';
import Kitchen from './Kitchen';

const Market = ({staple}) => {
  return (
    <div style={{ border: '1px solid skyblue', padding: '8px' }}>
      <h3>Market</h3>
      <Kitchen staple={staple}/>
    </div>
  );
};

export default Market;
