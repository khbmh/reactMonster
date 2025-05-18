import React from 'react';

const Stomach = ({ staple }) => {
  return (
    <div style={{ border: '1px solid skyblue', padding: '8px' }}>
      <h3>Stomach</h3>
      <p>staple variable used here in salmon color</p>
      <p style={{color:'salmon'}}>{staple}</p>
    </div>
  );
};

export default Stomach;
