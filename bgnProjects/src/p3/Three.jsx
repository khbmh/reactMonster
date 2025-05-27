import axios from 'axios';
import { useEffect, useState } from 'react';
import './s3.css';

const Three = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div id="three">
      <section className="section">
        <h1>3. Fetching Data using Axios</h1>
        <div className="container">
          {items.slice(4, 12).map((i) => (
            <div key={i.id} className="item">
              <img src={i.image} alt="" />
              <h4>{i.category}</h4>
              <p>${i.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Three;
