import { useRef } from 'react';
import RefTimer from './RefTimer';

const Ref = () => {
  const inputElement = useRef(null);
  const handleRef = () => {
    inputElement.current.focus();
    inputElement.current.value = 'I am ';
  };
  return (
    <div>
      <h1>useRef</h1>
      <input type="text" ref={inputElement} />
      <button onClick={handleRef}>Write Your name</button>
      <br />
      <br />
      <RefTimer />
    </div>
  );
};

export default Ref;
