import React from "react";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Login from "./components/Login";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Customer from "./components/Customer";

const App = () => {
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
            <Customer />
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
