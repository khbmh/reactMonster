import { useState } from 'react';
import './two.css';

const Two = () => {
  const generateId = () => `${Date.now()}`;
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');
  const task = { task: item, id: generateId() };
  const handleAdd = () => {
    setList((list) => [...list, task]);
    setItem('');
  };

  const handleRemove = (id) => {
    setList((list) => list.filter((l) => l.id !== id));
  };

  return (
    <div id="two">
      <section className="section-2">
        <h1>2. To Do List</h1>
        <div className="container">
          <div className="input">
            <input
              onChange={(e) => {
                setItem(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleAdd();
              }}
              value={item}
              type="text"
              placeholder="add your to do"
            />
            <button onClick={handleAdd}>ADD</button>
          </div>
          <div className="list">
            {list.map((t, idx) => (
              <p key={t.id}>
                <span>{idx + 1}.</span>
                <span>{t.task}</span>
                <span className="remove" onClick={() => handleRemove(t.id)}>
                  ✕
                </span>
              </p>
            ))}
            {!!item.trim() && <p className="yellow">{item} </p>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Two;
