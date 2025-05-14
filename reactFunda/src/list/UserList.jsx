const UserList = () => {
  const users = [
    { id: 1, name: 'alice', age: 42 },
    { id: 2, name: 'nice', age: 74 },
    { id: 3, name: 'alex', age: 32 },
  ];
  return (
    <div>
      <h1>Users List</h1>
      {users.map(({ id, name, age }, idx) => (
        <ul key={idx}>
          <li>{id}</li>
          <li>{name}</li>
          <li>{age}</li>
        </ul>
      ))}
    </div>
  );
};

export default UserList;
