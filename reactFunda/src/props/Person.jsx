const Person = ({ img, name, age }) => {
  return (
    <div>
      <img src={img} width={'200px'} alt={name} />
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
    </div>
  );
};

export default Person;
