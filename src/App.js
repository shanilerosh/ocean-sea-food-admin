import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Login from "./components/Login";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Customer from "./components/Customer";
import Order from "./components/Order";
import io from "socket.io-client";
import { Button } from "react-bootstrap";
import OrderFilterForm from "./components/OrderFilterForm";
import { toast } from "react-toastify";
import Item from "./components/Item";
import User from "./components/User";

const socket = io("ws://ocean-sea-food-api.herokuapp.com/", {
  transports: ["websocket", "polling"],
});

socket.on("broadcast", (data) => {
  console.log(data);
  toast(
    `Order has been place by user ${data.user.userName} for the customer ${data.customer.customerName} for a total amount of Rs. ${data.orderTotal}`,
    { type: "success" }
  );
});

const App = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={15000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <BrowserRouter>
        <Switch>
          <Route path="/panel">
            <Header />
            <Order />
          </Route>
          <Route path="/item">
            <Header />
            <Item />
          </Route>
          <Route path="/user">
            <Header />
            <User />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
