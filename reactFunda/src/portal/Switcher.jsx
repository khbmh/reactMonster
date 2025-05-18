import { useState } from 'react';

const Switcher = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div>
      <h3>Switcher</h3>
      {isDark ? <p>Dark</p> : <p>Light</p>}
      <input type="text" key={isDark ? 'dark' : 'light'} />
      <button onClick={() => setIsDark((isDark) => !isDark)}>Switch</button>
    </div>
  );
};

export default Switcher;
