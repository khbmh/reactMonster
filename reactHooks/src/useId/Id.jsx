import React, { useId } from 'react';

const Id = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" name="email" id={`${id}-email`} />
      <br />
      <label htmlFor={`${id}-password`}>Password</label>
      <input type="password" name="password" id={`${id}-password`} />
    </div>
  );
};

export default Id;
