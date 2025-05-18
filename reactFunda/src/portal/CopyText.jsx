import { useState } from 'react';
import Toast from './Toast';

const CopyText = () => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  function handleCopy() {
    if (text.trim() === '') {
      alert('no text to copy!');
      return;
    }
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setText('');
      setTimeout(() => {
        setCopied(false);
      }, 7000);
    });
  }
  return (
    <div>
      <Toast copied={copied}>
        <span>Text Copied</span>
      </Toast>
      <h2>CopyText</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {/* <button onClick={handleCopy}>{copied ? 'Copied' : 'Copy!'}</button> */}
      <button onClick={handleCopy}>Copy</button>
    </div>
  );
};

export default CopyText;
