import { useState } from 'react';
import './s7.css';

const Seven = () => {
  const [activeItem, setActiveItem] = useState(0);
  const testimonials = [
    {
      testimonial:
        'Used it once, now my Discord blew up and Elon asked me for tech support.',
      user: 'Beluga',
    },
    {
      testimonial:
        'Much wow. Very product. Now I ride rocket to moon with pockets full of treats.',
      user: 'Doge',
    },
    {
      testimonial:
        'Clicked once, unlocked brain’s third hemisphere. Now I float and give wisdom.',
      user: 'Xavier',
    },
  ];

  const handlePrev = () => {
    if (activeItem === 0) setActiveItem(testimonials.length - 1);
    else setActiveItem(activeItem - 1);
  };
  const handleNext = () => {
    setActiveItem((activeItem + 1) % testimonials.length);
  };

  return (
    <div id="seven">
      <section>
        <h1>7. Testimonials</h1>
        <div className="container">
          <div className="testimonial">
            <h3>{testimonials[activeItem].testimonial}</h3>
            <p>{testimonials[activeItem].user}</p>
            <div className="btns">
              <button onClick={handlePrev}>Prev</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Seven;
