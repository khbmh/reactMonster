import React from 'react';

function GreetingT({ timeOfTheDay }) {
  return timeOfTheDay === 'morning' ? (
    <p>Good Morning</p>
  ) : (
    timeOfTheDay === 'afternoon' && <p>Good Afternoon</p>
  );
}

export default GreetingT;
