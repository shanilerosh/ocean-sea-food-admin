import axios from "axios";
import React, { useState, useEffect } from "react";
import OrderDetail from "./OrderDetail";
import { Button } from 'react-bootstrap';

function Order() {
    const [orders, setOrders] = useState([]);
    const [orderStatus, setOrderStatus] = useState('pending');

    useEffect(() => {
        axios.get('http://localhost:1234/api/v1/order/getAllOrders').then(({ data }) => {
            console.log(data.data);
            if (data.isDone) {
                setOrders(data.data);
                console.log("adadad", orders);
            } else {

            }
        })
    }, []);

    return (
        <div className="container">
            {orders.map(order => {
                <OrderDetail orderDetail={order} />
            })}
        </div>
    );
}

export default Order;
