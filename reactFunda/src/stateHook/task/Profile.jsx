import { useState } from 'react';

const Profile = () => {
  return (
    <div>
      <Account />
    </div>
  );
};

export default Profile;

const Account = () => {
  const [user, setUser] = useState({ name: 'john man', age: 23 });

  const [nameInput, setNameInput] = useState(user.name);
  const [ageInput, setAgeInput] = useState(user.age);
  const handleUpdate = (e) => {
    e.preventDefault();
    setUser({ ...user, age: ageInput, name: nameInput });
    e.target.reset();
  };
  return (
    <div>
      <p>Name: {nameInput || user.name}</p>
      <p>Age: {ageInput || user.age}</p>
      <br />
      Name:{' '}
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="enter your name"
          onChange={(e) => {
            setNameInput(e.target.value);
          }}
        />
        {'   '}
        {'   '}
        Age:{' '}
        <input
          type="number"
          placeholder="enter your age"
          onChange={(e) => {
            setAgeInput(e.target.value);
          }}
        />
        <button>Update</button>
      </form>
      <br />
      <br />
    </div>
  );
};
