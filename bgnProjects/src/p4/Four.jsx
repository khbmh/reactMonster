import { useState } from 'react';
import './s4.css';

const Four = () => {
  const [inputvalue, setinputvalue] = useState('');

  function display(value) {
    setinputvalue(inputvalue + value);
  }

  function calculate() {
    var answers = eval(inputvalue);
    setinputvalue(answers);
  }

  function clear() {
    setinputvalue('');
  }
  return (
    <div id="four">
      <section>
        <h1>4. Simple Calculator</h1>
        <div className="container">
          <form class="calculator" name="calc">
            <input type="text" class="value" value={inputvalue} />
            <span class="num clear" onClick={() => clear()}>
              c
            </span>
            <span onClick={() => display('%')}>%</span>
            <span onClick={() => display('/')}>/</span>
            <span onClick={() => display('7')}>7</span>
            <span onClick={() => display('8')}>8</span>
            <span onClick={() => display('9')}>9</span>
            <span onClick={() => display('*')}>*</span>
            <span onClick={() => display('4')}>4</span>
            <span onClick={() => display('5')}>5</span>
            <span onClick={() => display('6')}>6</span>
            <span onClick={() => display('-')}>-</span>
            <span onClick={() => display('1')}>1</span>
            <span onClick={() => display('2')}>2</span>
            <span onClick={() => display('3')}>3</span>
            <span onClick={() => display('+')}>+</span>
            <span onClick={() => display('0')}>0</span>
            <span onClick={() => display('.')}>.</span>
            <span class="num equal" onClick={() => calculate()}>
              =
            </span>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Four;
