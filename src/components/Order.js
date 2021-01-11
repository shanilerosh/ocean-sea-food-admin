import axios from "axios";
import React, { useState, useEffect } from "react";
import OrderDetail from "./OrderDetail";
import { Button } from 'react-bootstrap';

function Order() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('https://ocean-sea-food-api.herokuapp.com/api/v1/order/getAllOrders').then(({ data }) => {
            console.log(data.data);
            if (data.isDone) {
                setOrders(data.data.reverse());
            } else {
            }
        })
    }, []);

    console.log(orders);
    return (
        <div className="container">
            {orders.map(order => {
                return <OrderDetail orderDetail={order} />
            })}
        </div>
    );
}

export default Order;
