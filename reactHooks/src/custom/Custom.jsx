import React from 'react';
import useFetch from './useFetch';

const Custom = () => {
  const data = useFetch('https://jsonplaceholder.typicode.com/users');
  return (
    <div>
      <h2>Custom hooks - fetching data</h2>
      <div>
        {!data ? (
          <div>Loading...</div>
        ) : (
          <div>
            {data.map((d) => (
              <div key={d.id}>
                <h3>{d.name}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Custom;
