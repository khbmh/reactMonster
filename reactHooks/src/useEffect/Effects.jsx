import React, { useEffect, useState } from 'react';

const Effects = () => {
  const [num, setNum] = useState(0);
  const [even, setEven] = useState(0);
  useEffect(() => {
    console.log('mounts on every render');
  });
  useEffect(() => {
    console.log('Mounts only once at the beginning');
  }, []);
  useEffect(() => {
    console.log('Mounts when num change', num);
    if (num > 0) document.title = `Num Increments ${num}`;
  }, [num]);

  return (
    <div style={{ border: '1px solid #e72', padding: '8px' }}>
      <h3>various Effects</h3>
      <p>Check console</p>
      <div>
        <p>{num}</p>
        <button
          onClick={() => {
            setNum(num + 1);
          }}
        >
          Add +1
        </button>
      </div>
      <div>
        <p>{even}</p>
        <button
          onClick={() => {
            setEven(even + 2);
          }}
        >
          Add +2
        </button>
      </div>
    </div>
  );
};

export default Effects;
