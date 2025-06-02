import { useState } from 'react';
import './s9.css';

const Nine = () => {
  const [userName, setUserName] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [pass, setPass] = useState('');
  const [errorPass, setErrorPass] = useState(false);
  const [confirm, setConfirm] = useState('');
  const [errorConfirm, setErrorConfirm] = useState(false);
  const [good, setGood] = useState(false);
  const handleForm = (e) => {
    e.preventDefault();
    // console.log('clicked', userName, pass, confirm, email);
    if (userName.length < 5) {
      setErrorName(true);
      setGood(false);
      return;
    }
    if (!email.includes('@gmail.com')) {
      setErrorEmail(true);
      setGood(false);
      return;
    }
    if (pass !== '' && pass.trim('').length < 8) {
      setErrorPass(true);
      setGood(false);
      return;
    }
    if (pass != confirm) {
      setErrorConfirm(true);
      setGood(false);
      return;
    }
    if (userName.length >= 5) {
      setErrorName(false);
    }
    if (email.includes('@gmail.com')) {
      setErrorEmail(false);
    }
    if (pass.trim('').length >= 8) {
      setErrorPass(false);
    }
    if (pass == confirm) {
      setErrorConfirm(false);
    }
    setGood(true);
  };
  return (
    <div id="nine">
      <section>
        <h1>9. Form Validation</h1>
        <div className="container">
          <form onSubmit={handleForm}>
            <div>
              <input
                className={`${good && 'good'}`}
                type="text"
                placeholder="User Name"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <p className={`error ${errorName || 'hideError'}`}>
                At least 5 characters, no space
              </p>
            </div>
            <div>
              <input
                className={`${good && 'good'}`}
                type="email"
                placeholder="User Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  // e.target.value.includes('@gmail.com') && setErrorName(false);
                }}
              />
              <p className={`error ${errorEmail || 'hideError'}`}>
                Must need to be a gmail
              </p>
            </div>
            <div>
              <input
                className={`${good && 'good'}`}
                type="password"
                placeholder="Password"
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
              <p className={`error ${errorPass || 'hideError'}`}>
                Password must be 8 characters long
              </p>
            </div>
            <div>
              <input
                className={`${good && 'good'}`}
                type="password"
                placeholder="Confirm Password"
                value={confirm}
                onChange={(e) => {
                  setConfirm(e.target.value);
                }}
              />
              <p className={`error ${errorConfirm || 'hideError'}`}>
                Both passwords need to match
              </p>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Nine;
