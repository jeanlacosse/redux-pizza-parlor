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

        <Route path="/" exact>
        <PizzaList />
        </Route>

        <Route path="/orderlist" exact>
        <OrderList />
        </Route>

        <Route path="/form" exact>
          <PizzaForm />
        </Route>

        <Route path="/confirmation" exact>
          <ConfirmOrder
          />
        </Route>

        <img src='images/pizza_photo.png' />
        <Link to="/form">
        Next
        </Link>
      </div>
    </Router>



  );
}

export default App;


