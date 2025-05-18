import { useEffect, useState } from 'react';

const FData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/comments?postId=1',
      );
      const dataGot = await res.json();
      if (dataGot && dataGot.length) setData(dataGot);
    }
    fetchData();
  }, [data]);
  return (
    <div>
      <h3>fetched data</h3>
      {data.map((d, idx) => (
        <div key={idx}>
          <p>{d.body}</p>
        </div>
      ))}
    </div>
  );
};

export default FData;
