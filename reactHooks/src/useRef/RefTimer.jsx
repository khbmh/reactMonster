import { useEffect, useRef, useState } from 'react';

const RefTimer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const countIntervalRef = useRef(null);
  useEffect(() => {
    if (isRunning) {
      countIntervalRef.current = setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
    } else {
      clearInterval(countIntervalRef.current);
    }
    return () => {
      clearInterval(countIntervalRef.current);
    };
  }, [isRunning]);
  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning((e) => !e);
  };
  const handleReset = () => {
    setIsRunning(false);
    setCount(0);
  };

  return (
    <div>
      <h2>Timer: {count}</h2>
      {count === 0 && <button onClick={handleStart}>Start</button>}
      {count > 0 && (
        <button onClick={handleStop}>{isRunning ? 'Pause' : 'Resume'}</button>
      )}
      {count > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};

export default RefTimer;
