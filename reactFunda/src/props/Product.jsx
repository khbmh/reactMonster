import React from 'react';

const Product = ({ name, price }) => {
  return (
    <div>
      <p> Name: {name}</p>
      <p> Price: ${price}</p>
    </div>
  );
};

export default Product;
