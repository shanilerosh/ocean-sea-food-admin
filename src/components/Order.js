import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import OrderDetail from "./OrderDetail";
import { Button } from 'react-bootstrap';
import { UserAuth } from './context/AuthContextProvider';
import { useHistory } from 'react-router-dom';

function Order() {
    const [orders, setOrders] = useState([]);
    const history = useHistory();
    const { validatedUser } = useContext(UserAuth);
    useEffect(() => {
        console.log('validatedd', validatedUser)
        if (!validatedUser) {
            history.push('/login');
        }
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
