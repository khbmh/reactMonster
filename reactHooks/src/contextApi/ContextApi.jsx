import { createContext } from 'react';
import Field from './Field';
import UserProfile from './task/UserProfile';
import UserContext from './task/UserContext';
export const Data = createContext();

const ContextApi = () => {
  const staple = 'rice';
  const num = 3;
  const info = {
    staple,
    num,
  };
  return (
    <div>
      <div>
        <UserContext />
      </div>
      <br />
      <br />
      <br />
      <div style={{ border: '1px solid skyblue', padding: '8px' }}>
        <h2>Context Api</h2>
        <p>Staple variable is created here.</p>
        <Data.Provider value={info}>
          <Field />
        </Data.Provider>
      </div>
    </div>
  );
};

export default ContextApi;
