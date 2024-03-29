import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import './ConfirmOrders.css';

import axios from 'axios';


function ConfirmOrder({ getPizzas }) {
    const dispatch = useDispatch();
    const history = useHistory()
    const pizzaCart = useSelector(store => store.pizzaCart);
    const addedCustomer = useSelector(store => store.addedCustomer)

    let pizzas = [];

    let total = 0;
    for (let pizza of pizzaCart) {
        total += Number(pizza.price);
        pizzas.push({
            id: pizza.id, 
            quantity: '1'
        })
    }
    
    const backToHome = () => {
        handleSubmit();
        history.push('/')
    }

    const handleSubmit = () => {
        // event.preventDefault();
        console.log('checking out pizza', {
            customer_name: addedCustomer.name,
            street_address: addedCustomer.address,
            city: addedCustomer.city,
            zip: addedCustomer.zip,
            type: addedCustomer.type,
            total: total,
            pizzas: pizzas
        })
        let fullOrderData = {
            customer_name: addedCustomer.name,
            street_address: addedCustomer.address,
            city: addedCustomer.city,
            zip: addedCustomer.zip,
            type: addedCustomer.type,
            total: total,
            pizzas: pizzas
        }
        axios({
            method: 'POST',
            url: '/api/order',
            data: fullOrderData
        })
            .then(() => {
                console.log('POST /orders')

                
            })
            .catch((error) => {
                console.log('POST error', error);
            });
    }

    return (
        <>

            <div>
                <h2>Step 3: Checkout</h2>
            </div>

            <ul>
                <li>
                    {addedCustomer.name}
                </li>
                <li>
                    {addedCustomer.address}
                </li>
                <li>
                    {addedCustomer.city}
                </li>
                <li>
                    {addedCustomer.zip}
                </li>
            </ul>

            <div>
                <h2>For {addedCustomer.type}</h2>

            </div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {pizzaCart.map((pizzaOrders) => {
                        return (
                            <tr key={pizzaOrders.id}>
                                <td>{pizzaOrders.name}</td>
                                <td>{pizzaOrders.price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div>
                <button onClick={backToHome}>
                    Checkout
                </button>
            </div>

        </>
    )

}

export default ConfirmOrder;