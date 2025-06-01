import { useEffect, useState } from 'react';
import One from './p1/One';
import Ten from './p10/Ten';
import Two from './p2/Two';
import Three from './p3/Three';
import Four from './p4/Four';
import Five from './p5/Five';
import Six from './p6/Six';
import Seven from './p7/Seven';
import Eight from './p8/Eight';
import Nine from './p9/Nine';

const App = () => {
  return (
    <div id="home">
      <Four />
      <Hero />
      <hr />
      <One />
      <hr />
      <Two />
      <hr />
      <Three />
      {/* <hr />
      <Four /> */}
      <hr />
      <Five />
      <hr />
      <Six />
      <hr />
      <Seven />
      <hr />
      <Eight />
      <hr />
      <Nine />
      <hr />
      <Ten />
      <ScrollTop />
    </div>
  );
};

export default App;

const Hero = () => {
  return (
    <section className="center-sec">
      <div>
        <h1>React Beginner Projects</h1>
        <div className="center">
          <a href="#one">Project one: Simple Counter</a>
          <a href="#two">Project two: To Do list</a>
          <a href="#three">Project three: Basic Axios</a>
          <a href="#four">Project four: Calculator</a>
          <a href="#five">Project five:</a>
          <a href="#six">Project six:</a>
          <a href="#seven">Project seven:</a>
          <a href="#eight">Project eight:</a>
          <a href="#nine">Project nine:</a>
          <a href="#ten">Project ten:</a>
        </div>
      </div>
      <footer>
        <a href="http://mahi-here.netlify.app" target="_blank">
          made by mahi
        </a>
      </footer>
    </section>
  );
};

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', toggleVisible);

    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  if (!isVisible) return null;

  return (
    <a href="#home">
      <h1 className={`--scroll-top`}>↑</h1>
    </a>
  );
};
