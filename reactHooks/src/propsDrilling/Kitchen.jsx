import React from 'react';
import Stomach from './Stomach';

const Kitchen = ({staple}) => {
  return (
    <div style={{ border: '1px solid skyblue', padding: '8px' }}>
      <h3>Kitchen</h3>
      <Stomach staple={staple}/>
    </div>
  );
};

export default Kitchen;
