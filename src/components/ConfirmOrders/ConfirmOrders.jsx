import { useSelector, useDispatch } from 'react-redux';

function ConfirmOrder() {
    const dispatch = useDispatch();
    const pizzaCart = useSelector(store => store.pizzaCart);
    const addedCustomer = useSelector(store => store.addedCustomer);
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
                            console.log(pizzaOrders);
                            return (
                                <tr key={pizzaOrders.id}>
                                    <td>{pizzaOrders.name}</td>
                                    <td>{pizzaOrders.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <button type="checkout">
                    Checkout
                </button>
                
            </>
            )  
   
}

export default ConfirmOrder;