import { useContext } from 'react';
import { UserProvider } from './UserContext';

const UserProfile = () => {
  const { user, iName, iAge } = useContext(UserProvider);
  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {iName || user.name}</p>
      <p>Age: {iAge || user.age}</p>
    </div>
  );
};

export default UserProfile;
