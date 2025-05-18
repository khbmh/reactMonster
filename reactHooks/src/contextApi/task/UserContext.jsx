import { createContext, useState } from 'react';
import UserProfile from './UserProfile';
import UpdateUser from './UpdateUser';

export const UserProvider = createContext();
const UserContext = () => {
  const [user, setUser] = useState({ name: 'Mango', age: 21 });
  const [iName, setIName] = useState(user.name);
  const [iAge, setIAge] = useState(user.age);
  const handleChange = (e, name, age) => {
    e.preventDefault();
    if (name.trim() === '' || age < 1) return;

    setUser({ ...user, name: iName, age: iAge });
    e.target.reset();
  };
  const data = {
    user,
    setUser,
    setIAge,
    setIName,
    iName,
    iAge,
    handleChange,
  };
  return (
    <div>
      <UserProvider.Provider value={data}>
        <UserProfile />
        <UpdateUser />
      </UserProvider.Provider>
    </div>
  );
};

export default UserContext;
