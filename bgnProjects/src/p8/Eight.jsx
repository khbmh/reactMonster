import { useState } from 'react';
import './s8.css';

const Eight = () => {
  const faqs = [
    {
      question: 'Is this worth it?',
      answer:
        'It’s not just about the price — it’s about the experience. It’s well worth it. We’re all about giving you real value, so you’ll get more than what you paid for, every single time.',
    },
    {
      question: 'Is this a scam?',
      answer:
        'Absolutely not! No hidden fees, no funny business. What you see is exactly what you get. We’re committed to transparency, so you can relax and trust that you’re in safe, honest hands.',
    },
    {
      question: 'Who’s behind this?',
      answer:
        'It’s us! A dedicated team working tirelessly behind the scenes to make sure everything runs perfectly for you. No solo act here — we’ve got a whole squad making sure you get the best experience.',
    },
    {
      question: 'Is there any hidden catch?',
      answer:
        'No catches, no tricks. Just good, honest service. We’re all about clarity and transparency, so there are no surprises down the line. What you see is what you get, and it’s exactly what you need.',
    },
  ];

  return (
    <div id="eight">
      <section>
        <h1>8. faq Accordion</h1>
        <div className="container">
          {faqs.map((f) => (
            <Accordion f={f} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Eight;

const Accordion = ({ f }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className="faq"
      onClick={() => {
        setIsActive(!isActive);
      }}
      key={f.id}
    >
      <div className="ques">
        <h3>{f.question}</h3>{' '}
        <span className="icon">{isActive ? '-' : '+'}</span>
      </div>
      {isActive && <p>{f.answer}</p>}
    </div>
  );
};
