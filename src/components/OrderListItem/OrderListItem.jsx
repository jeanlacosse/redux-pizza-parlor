import axios from "axios";

function OrderListItem({order, fetchOrders}) {
    function handleOrderDelete(){
        axios.delete(`/api/order/${order.id}`)
        .then(() => {
            console.log('delete order success');
            fetchOrders();
            
        })
        .then(err => console.log('delete order failed', err))
    }
    let time = new Date(order.time).toLocaleString([], {hour: '2-digit', minute:'2-digit'});
    return (
        <tr>
            <td>{order.customer_name}</td>
            <td> {time} </td>
            <td> {order.type} </td>
            <td> {order.total} </td>
            <td> <button onClick={handleOrderDelete}> Delete </button> </td>
        </tr>
    )
}

export default OrderListItem;