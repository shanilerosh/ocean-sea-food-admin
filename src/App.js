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

const socket = io("ws://localhost:1234", {
  transports: ["websocket", "polling"],
});

socket.on("broadcast", (data) => {
  console.log("Called Here", data);
});

const App = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
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
          <Route path="/">
            <Header />
            <Order />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/panel">
            <Header />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
