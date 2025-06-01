import { useState } from 'react';
import './s6.css';

const Six = () => {
  const [isShown, setIsShown] = useState(false);
  const handleShown = (e) => {
    if (e.target.className === 'container') setIsShown(false);
    if (e.target.className === 'btn') setIsShown(true);
  };
  return (
    <div id="six">
      <section className={`${isShown && 'light'}`}>
        <h1>6. Show Hide Search Bar</h1>
        <div className="container" onClick={handleShown}>
          {isShown ? (
            <input placeholder="Search" />
          ) : (
            <button className="btn" onClick={handleShown}>
              🔍
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Six;
