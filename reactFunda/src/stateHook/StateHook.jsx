import React, { useState } from 'react';
import Count from './Count';
import StoreName from './StoreName';
import TodoList from './task/TodoList';
import Profile from './task/Profile';
import ShoppingList from './task/ShoppingList';

const StateHook = () => {
  return (
    <div>
      <h1>useState Hook</h1>
      <Counter />
      <br />
      <br />
      <StoreName />
      <br />
      <br />
      <Count />
      <br />
      <br />
      <RandomNum />
      <br />
      <br />
      <ArrObjState />
      <br />
      <br />
      <CallBackState />
      <br />
      <br />
      <ObjectState />
      <br />
      <br />
      <ArrayState />
      <br />
      <br />
      <h3>Task</h3>
      <TodoList />
      <br />
      <br />
      <ShoppingList />
      <br />
      <Profile />
      <br />
      <br />
      <br />
    </div>
  );
};

export default StateHook;
const RandomNum = () => {
  const [randomNumber, setRandomNumber] = useState(() =>
    Math.round(Math.random() * 50 + 50),
  );
  const handleClick = () =>
    setRandomNumber(Math.round(Math.random() * 50 + 50));

  return (
    <div>
      <p>Random Number: {randomNumber}</p>
      <button onClick={handleClick}>Generate new</button>
    </div>
  );
};
const CallBackState = () => {
  const [count, setCount] = useState(() => {
    const initialCount = 0;
    return initialCount;
  });
  const handleCount = () => setCount((prev) => prev + 1);

  return (
    <div>
      <h2>Call back</h2>
      <p>{count}</p>
      <button onClick={handleCount}>Add</button>
    </div>
  );
};

const ArrObjState = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'potato chips',
      price: 25,
    },
    {
      id: 2,
      name: 'Dark Chocolate',
      price: 200,
    },
    {
      id: 3,
      name: 'Toothpaste',
      price: 78,
    },
  ]);

  const handlePrice = () =>
    setProducts(
      products.map((f) =>
        f.id === 1 ? { ...f, price: Math.round(Math.random() * 10 + 25) } : f,
      ),
    );
  return (
    <div>
      <h2>Array of objects</h2>
      {products.map((p) => (
        <div key={Math.random()}>
          <h2>
            <span>{p.id}.</span> <span>{p.name}</span>
            <p>Price: {p.price}ট</p>
          </h2>
        </div>
      ))}
      <button onClick={handlePrice}>Change Price</button>
    </div>
  );
};

const ObjectState = () => {
  const [person, setPerson] = useState({
    name: 'mango lemon',
    age: 33,
  });
  const handleAge = () =>
    setPerson({ ...person, age: Math.round(Math.random() * 32 + 20) });
  return (
    <div>
      <h2>Object</h2>
      <h4>Name: {person.name}</h4>
      <p>Age: {person.age}</p>
      <button onClick={handleAge}>Change Age</button>
    </div>
  );
};

const ArrayState = () => {
  const [flowers, setFlowers] = useState(['Rose', 'Lotus', 'Lily']);
  const addOne = () => setFlowers([...flowers, 'Daisy']);
  const removeOne = () => setFlowers(flowers.filter((f) => f !== 'Lotus'));
  const updateOne = () =>
    setFlowers(flowers.map((f) => (f === 'Lily' ? 'Waterlily' : f)));
  return (
    <div>
      <h2>Array</h2>
      {flowers.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}
      <button onClick={addOne}>Add one</button>
      <button onClick={removeOne}>Remove One</button>
      <button onClick={updateOne}>Update One</button>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};
