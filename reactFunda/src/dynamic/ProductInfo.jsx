import React from 'react';

const ProductInfo = () => {
  const product = {
    name: 'laptop',
    price: 1200,
    isAvailable: true,
  };
  return (
    <div>
      <p>Product: {product.name}</p>
      <p>Price: ${product.price}</p>
      <p>{product.isAvailable ? 'In stock' : 'out of stock'}</p>
    </div>
  );
};

export default ProductInfo;
