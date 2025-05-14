import React from 'react';
import { Greet } from '../components/Greet';
import { Hello } from '../components/Hello';
import NewCom from '../components/NewCom';

const MainContent = () => {
  return (
    <main>
      <h2>Main Content</h2>
      <div>
        <h1>App</h1>
        <br />
        declaration <Greet />
        <br />
        arrow <Hello />
        <br />
        <NewCom />
      </div>
    </main>
  );
};

export default MainContent;
