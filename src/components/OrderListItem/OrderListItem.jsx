

function OrderListItem({order}) {

    return (
        <tr>
            <td>{order.customer_name}</td>
            <td> {order.time} </td>
            <td> {order.type} </td>
            <td> {order.total} </td>
            <td> <button> Delete </button> </td>
        </tr>
    )
}

export default OrderListItem;