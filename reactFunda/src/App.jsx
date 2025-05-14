import Child from './children/Child';
import GreetingT from './conditional/GreetingT';
import UserStatus from './conditional/UserStatus';
import Weather from './conditional/Weather';
import Greeting from './dynamic/Greeting';
import ProductInfo from './dynamic/ProductInfo';
import ProductList from './list/ProductList';
import UserList from './list/UserList';
import Person from './props/Person';
import Product from './props/Product';
import Footer from './Task2/Footer';
import Header from './Task2/Header';
import MainContent from './Task2/MainContent';
import JsxRules from './task3/JsxRules';
import WelcomeMsg from './task3/WelcomeMsg';

function App() {
  const cssStyles = {
    color: 'black',
    backgroundColor: 'crimson',
    padding: '12px',
    fontFamily: 'serif',
  };
  return (
    <>
      {/* <Header />
      <MainContent />
      <WelcomeMsg />
      <JsxRules /> 
      <Greeting />
      <ProductInfo />
      <UserList />
      <ProductList />
      <Person
        img={
          'https://i.pinimg.com/736x/b9/28/e8/b928e862262e190c584a6af01a650d60.jpg'
        }
        name={'adam'}
        age={22}
      />
      <Product name={'smart phone'} price={899} />
      <Child>
        <h2>Children</h2>
        <p>This data is showing via props.children</p>
      </Child>
      <Weather temp={23} />
      <UserStatus isLoggedIn={true}/>
      <GreetingT timeOfTheDay={'afternoon'}/>*/}
      <section>
        <p style={{ color: 'black', backgroundColor: 'pink', padding: '11px' }}>
          Inline Style
        </p>
        <p style={cssStyles}>Object Style</p>
      </section>
      <section>
        <p className="external-style">from style file</p>
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default App;
