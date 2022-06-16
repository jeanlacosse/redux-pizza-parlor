import React from 'react';


import { useSelector, useDispatch } from 'react-redux';

function PizzaItem({ pizza }) {

    const dispatch = useDispatch();

    const addPizzaToCart = () => {
        console.log(pizza);
        // need to have this update a reducer with add in
        dispatch ({
            type: 'ADD_PIZZA_CART',
            payload: pizza
        })
    }

    const removePizzaToCart = () => {
        console.log(pizza);
        // need to have this update a reducer with removal
        // dispatch a local array that pizza is saved to
        dispatch ({
            type: 'DELETE_PIZZA_CART',
            payload: pizza
        })

    }

    return (
        <>
            <div>
                {pizza.name}: {pizza.description} {pizza.price}
                <button onClick={addPizzaToCart}>Add</button>
                <button onClick={removePizzaToCart}>Remove</button>
            </div>
        </>
    )
}

export default PizzaItem;