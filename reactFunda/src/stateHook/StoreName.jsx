import React, { useEffect, useState } from 'react';

const StoreName = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem('name');
    return savedName ? JSON.parse(savedName) : '';
  });
  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name));
  }, [name]);
  /*
1. name availability check | ''
2. name input
3. onchange
4. store name
*/
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleClear = () => {
    setName('')
    localStorage.clear()
  };
  return (
    <div>
      <h2>Your name: {name}</h2>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your Name"
      />
      <button onClick={handleClear}>Clear Name</button>
    </div>
  );
};

export default StoreName;
