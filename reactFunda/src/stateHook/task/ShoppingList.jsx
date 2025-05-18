import { useState } from 'react';

const ShoppingList = () => {
  const [list, setList] = useState([]);
  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const quantity = Number(e.target.quantity.value);
    if (name.trim() === '' || quantity < 1) {
      alert('Not a valid item');
      return;
    }
    setList([...list, { name, quantity }]);
    console.log(list);
    e.target.reset();
  };
  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleForm}>
        <input type="text" name="name" placeholder="Name" />
        <input type="number" name="quantity" placeholder="Quantity" />
        <button>Add Item</button>
      </form>
      <div>
        {list.map((item, idx, arr) => (
          <div key={idx}>
            <p
              style={{
                borderBottom:
                  idx === arr.length - 1 ? 'none' : '1px solid maroon', padding: '0px 5px 14px 5px',
              }}
            >
              Name: {item.name}, Quantity: <span>{item.quantity}pcs</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
