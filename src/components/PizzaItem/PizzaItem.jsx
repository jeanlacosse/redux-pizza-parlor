import React from 'react';


function PizzaItem({ pizza }) {

    const addPizzaToCart = () => {
        console.log(pizza);
      }

    return (
        <>
            <div>
                {pizza.name}: {pizza.description} {pizza.price}
                <button onClick={addPizzaToCart}>Add</button>
                {/* <button onClick={removePizzaToCart}>Remove</button> */}
            </div>
        </>
    )
}

export default PizzaItem;