import {useEffect} from 'react'    
import { useDispatch, useSelector } from 'react-redux'
import OrderListItem from '../OrderListItem/OrderListItem'
import axios from 'axios'

function OrderList() {
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get('/api/order')
        .then((response) => {
            console.log('get orders success', response.data);
            dispatch({
                type: 'GET_ORDER_LIST',
                payload: response.data
            })
        })
        .catch(err => console.log('get orders failed', err));
    }, [])

    const orders = useSelector(store => store.orderList)

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
            </thead>

            <tbody>
                {orders.map(order =>
                    <OrderListItem order={order} key={order.id} />)}
            </tbody>
        </table>
    )

}



export default OrderList;