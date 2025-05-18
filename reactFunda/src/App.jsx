import Child from './children/Child';
import GreetingT from './conditional/GreetingT';
import UserStatus from './conditional/UserStatus';
import Weather from './conditional/Weather';
import Greeting from './dynamic/Greeting';
import ProductInfo from './dynamic/ProductInfo';
import ProductList from './list/ProductList';
import UserList from './list/UserList';
import Event from './listenEvent/Event';
import Portal from './portal/Portal';
import Person from './props/Person';
import Product from './props/Product';
import StateHook from './stateHook/StateHook';
import IconCom from './styleIcon/IconCom';
import ProfileCard from './styleIcon/ProfileCard';
import StyleCard from './styleIcon/StyleCard';
import Footer from './Task2/Footer';
import Header from './Task2/Header';
import MainContent from './Task2/MainContent';
import JsxRules from './task3/JsxRules';
import WelcomeMsg from './task3/WelcomeMsg';

function App() {
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
      <GreetingT timeOfTheDay={'afternoon'}/>
      <StyleCard />
      <ProfileCard />
      <IconCom />
      <Event />
      <StateHook />*/}
      <Portal />
      {/* <Footer /> */}
    </>
  );
}

export default App;
