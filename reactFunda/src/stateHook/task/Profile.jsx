import { useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState({
    userName: 'mango lemon',
    userAge: 22,
  });
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  function nameChange(e) {
    setName(e.target.value);
  }
  function ageChange(e) {
    setAge(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setUser({
      ...user,
      userName: name,
      userAge: age,
    });
    e.target.reset();
  }
  return (
    <div>
      <p>Name: {user.userName}</p>
      <p>Age: {user.userAge}</p>
      <form onSubmit={handleSubmit}>
        Name:
        <input type="text" onChange={nameChange} placeholder="Enter your age" />
        Age:
        <input
          type="number"
          onChange={ageChange}
          placeholder="Enter your age"
        />
        <button>Update</button>
      </form>
    </div>
  );
};

export default Profile;
