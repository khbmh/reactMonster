import React from 'react';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'smartphone',
      price: 700,
    },
    {
      id: 2,
      name: 'Coffee Maker',
      price: 300,
    },
    {
      id: 3,
      name: 'Fridge',
      price: 1100,
    },
  ];
  return (
    <div>
      <h1>ProductList</h1>
      {products.map(({ id, name, price }) => (
        <ul key={id}>
          <li>{id}</li>
          <li>Product: {name}</li>
          <li>Price: ${price}</li>
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
