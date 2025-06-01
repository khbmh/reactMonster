import { useState } from 'react';
import './s5.css';

const Five = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div id="five">
      <section className={`${isDark ? 'dark' : 'light'}`}>
        <h1>5. Toggle theme</h1>
        <div className="container">
          <button
            onClick={() => {
              setIsDark(!isDark);
            }}
            className={`${isDark? 'btn--dark': 'btn--light'}`}
          >
            {isDark ? 'Dark Theme' : 'Light Theme'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Five;
