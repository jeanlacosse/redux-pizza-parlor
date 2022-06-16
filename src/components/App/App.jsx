import React from 'react';
import './App.css';

import OrderList from '../OrderList/OrderList'

import PizzaList from '../PizzaList/PizzaList';

// TODO after lunch
// import routers stuff, create routes/links, add checkout button to route to the form
// top right corner total thing
function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <PizzaList />
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
    <OrderList />
    </div>

  
  );
}

export default App;
