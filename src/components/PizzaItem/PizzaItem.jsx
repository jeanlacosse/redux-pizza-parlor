import React, { useState } from 'react';


import { useSelector, useDispatch } from 'react-redux';

function PizzaItem({ pizza }) {

    const dispatch = useDispatch();

    const addPizzaToCart = () => {
        console.log(pizza);

        setShowAddBtn(false)
        // need to have this update a reducer with add in
        dispatch({
            type: 'ADD_PIZZA_CART',
            payload: pizza
        })
    }

    const removePizzaToCart = () => {
        console.log(pizza);

        setShowAddBtn(true)
        // need to have this update a reducer with removal
        // dispatch a local array that pizza is saved to
        dispatch({
            type: 'DELETE_PIZZA_CART',
            payload: pizza
        })

    }

    const [showAddBtn, setShowAddBtn] = useState(true);

    return (
        <>
            <div className='pizzaItem'>
            <div>
                <img className='pizzaImg' src='images/pizza_photo.png' />
            </div>
                <div className='pizzaItemName'>
                    {pizza.name}
                </div>
                <div>
                    {pizza.description}
                </div>
                <div>
                    {pizza.price}
                </div>

                {/* conditional redering for buttons */}
                {showAddBtn ?
                    <button onClick={addPizzaToCart}>Add</button>
                    :
                    <button onClick={removePizzaToCart}>Remove</button>
                }

            </div>
        </>
    )
}

export default PizzaItem;