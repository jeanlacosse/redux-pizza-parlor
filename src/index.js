import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// get _order_list reducer for stephen create
const orderList = (state = [], action) => {
    switch (action.type) {
        case 'GET_ORDER_LIST':
            return action.payload
    }
}


const pizzaList = (state = [], action) => {
    switch (action.type) {
        case 'GET_PIZZA_LIST':
            return [...state, action.payload]
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

