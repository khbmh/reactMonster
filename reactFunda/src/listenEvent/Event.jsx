import { useState } from 'react';

const Event = () => {
  return (
    <div>
      <h1 style={{ color: '#1100f3' }}>Handling Events</h1>
      <MovingCursor />
      <TextCopy />
      <ButtonClick />
    </div>
  );
};

export default Event;

const MovingCursor = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [styles, setStyles] = useState({
    height: '200px',
    width: '300px',
    backgroundColor: 'salmon',
    borderRadius: '22px',
    margin: '30px 0px',
    transition: 'background-color 0.3s ease',
  });

  function mouseLeaveHandler() {
    setStyles((prev) => {
      return {
        ...prev,
        backgroundColor: 'salmon',
      };
    });
  }
  function mouseMoveHandler() {
    const x = event.clientX;
    const y = event.clientY;
    setMouseX(x);
    setMouseY(y);
    if (x > y) {
      setStyles((prev) => {
        return {
          ...prev,
          backgroundColor: 'white',
          margin: `${x / 10}px ${y / 10}px`,
        };
      });
    } else if (y > x) {
      setStyles((prev) => ({
        ...prev,
        backgroundColor: 'blue',
        margin: `${x / 10}px ${y / 10}px`,
      }));
    }
  }
  return (
    <div>
      <div
        onMouseLeave={mouseLeaveHandler}
        onMouseMove={mouseMoveHandler}
        style={styles}
      >
        <p style={{ padding: '15px', color: 'maroon' }}>
          position x: {mouseX} <br /> position y: {mouseY}
        </p>
      </div>
    </div>
  );
};

const TextCopy = () => {
  const handleCopy = () => {
    alert('stealing my content?!');
  };
  return (
    <div>
      <p
        style={{ padding: '12px', margin: '20px', border: '1px dotted red' }}
        onCopy={handleCopy}
      >
        try copying this text : Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Error ipsum laudantium quo sunt enim ipsa quia, fugiat
        nam reiciendis voluptate, culpa animi.
      </p>
    </div>
  );
};
const ButtonClick = () => {
  const handleClick = () => {
    alert('clicked', Math.ceil(Math.random() * 10));
  };
  return (
    <button
      onClick={handleClick}
      style={{
        color: 'maroon',
        backgroundColor: 'beige',
        border: 'none',
        borderRadius: '4px',
        padding: '8px 14px',
        cursor: 'pointer',
      }}
    >
      Click
    </button>
  );
};
