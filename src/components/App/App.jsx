import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


import OrderList from '../OrderList/OrderList'
import PizzaList from '../PizzaList/PizzaList';
import PizzaForm from '../PizzaForm/PizzaForm';
import ConfirmOrder from '../ConfirmOrders/ConfirmOrders';




// TODO after lunch
// import routers stuff, create routes/links, add checkout button to route to the form
// top right corner total thing


function App() {

  return (

  

    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
        <h3>Step 1: Select Your Pizza</h3>
        <Route path="/" exact>
        <PizzaList />
        </Route>
        <img src='images/pizza_photo.png' />
        <Route path="/orderlist" exact>
        <OrderList />
        </Route>

        {/* need this to be a link to the form page */}
        <Route path="/form" exact>
          <PizzaForm />
        </Route>
        <Route path="/confirmation" exact>
          <ConfirmOrder 
          // custToAdd={custToAdd}
          />
        </Route>
      </div>
    </Router>



  );
}

export default App;


