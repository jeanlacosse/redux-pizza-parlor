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
    return state;
}

// this will pop up on the home page as a list of items with buttons on them
const pizzaList = (state = [], action) => {
    switch (action.type) {
        case 'GET_PIZZA_LIST':
            return action.payload
    }
    return state;
}

const pizzaCart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART':
            return [...state, action.payload]
        case 'DELETE_PIZZA_CART':
            return (
                // this will filter over array. If false it will keep item, if true it will delete item from array.
            state.filter(item => 
                item.name !== action.payload.name 
                ))
    }
    return state;
}

const addedCustomer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NEW_CUSTOMER':
            return action.payload
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
       pizzaList,
       orderList,
       pizzaCart,
       addedCustomer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

