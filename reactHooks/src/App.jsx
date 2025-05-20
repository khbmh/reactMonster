import React from 'react';
import UseEffect from './useEffect/UseEffect';
import PropDrill from './propsDrilling/PropDrill';
import ContextApi from './contextApi/ContextApi';
import UseReducer from './reducer/UseReducer';
import Ref from './useRef/Ref';
import Custom from './custom/Custom';
import UseId from './useId/UseId';

const App = () => {
  return (
    <main>
      <header>
        <h1>React Monster Chapter 2 - React Hooks</h1>
        <hr />
      </header>
      <UseEffect />
      <PropDrill />
      <ContextApi />
      <UseReducer />
      <Ref />
      <Custom />
      <UseId />
      <footer>
        <br />
        <hr />
        <p>
          ©️ 2025 my website{' '}
          <a href="http://mahi-here.netlify.app" target="_blank">
            Coded by Mahi
          </a>
        </p>
        <br />
        <a href="https://youtu.be/M9O5AjEFzKw">Taught by HuXn WebDev</a>
        <br />
        <br />
      </footer>
    </main>
  );
};

export default App;
