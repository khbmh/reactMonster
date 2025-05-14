const User = () => <p>welcome honorable User</p>;
const Admin = () => <p>welcome dear admin</p>;
const UserStatus = ({ isLoggedIn, isAdmin }) => {
  return isLoggedIn && isAdmin ? <Admin /> : isLoggedIn && <User />;
};

export default UserStatus;
