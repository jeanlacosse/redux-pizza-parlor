import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// axios.post does not set the reducer

// get _order_list reducer for stephen create
// this will be in the admin order page
const orderList = (state = [], action) => {
    switch (action.type) {
        case 'GET_ORDER_LIST':
            return action.payload
    }
}

// this will pop up on the home page as a list of items with buttons on them
const pizzaList = (state = [], action) => {
    switch (action.type) {
        case 'GET_PIZZA_LIST':
            return action.payload
    }
}

const storeInstance = createStore(
    combineReducers({
       pizzaList,
       orderList
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

