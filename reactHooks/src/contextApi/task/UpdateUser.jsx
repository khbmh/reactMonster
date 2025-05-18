import React, { useContext } from 'react';
import { UserProvider } from './UserContext';

const UpdateUser = () => {
  const { setIName, setIAge, iAge, iName, handleChange } =
    useContext(UserProvider);
  return (
    <div>
      <p>UpdateUser</p>
      Name:{' '}
      <form onSubmit={(e) => handleChange(e, iName, iAge)}>
        <input
          onChange={(e) => {
            setIName(e.target.value);
          }}
          type="text"
          placeholder="Enter your name"
        />{' '}
        Age:{' '}
        <input
          onChange={(e) => {
            setIAge(Number(e.target.value));
          }}
          type="number"
          placeholder="Enter your age"
        />
        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
