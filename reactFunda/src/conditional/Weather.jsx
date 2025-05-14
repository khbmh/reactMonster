import React from 'react';
const Nice = () => <p>It's nice outside</p>;
const Cold = () => <p>It's cold outside</p>;
const Hot = () => <p>It's hot outside</p>;

const Weather = ({ temp }) => {
  if (temp < 15) {
    return <Cold />;
  } else if (temp < 25) {
    return <Nice />;
  } else {
   return <Hot />;
  }
};

export default Weather;
