import React from 'react';
import axios from 'axios';
import './App.css';

import OrderList from '../OrderList/OrderList'

import PizzaList from '../PizzaList/PizzaList';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <PizzaList getPizzas={getPizzas} />
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
    <OrderList />
    </div>

  
  );
}

export default App;
