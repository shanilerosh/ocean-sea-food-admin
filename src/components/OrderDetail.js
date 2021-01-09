import React from "react";
import NumberFormat from "react-number-format";

function OrderDetail({ orderDetail }) {
  return (
    <div className="col-5 s-5 m-5 m-auto" key={orderDetail._id}>
      <div className="card blue-grey light-1">
        <div className="card-content white-text">
          <p className="orange-text right">{orderDetail._id}</p>
          <p>Customer Name: {orderDetail?.customer?.customerName}</p>
          <p>User Name: {orderDetail?.user?.userName}</p>
          <p>Required Date: {orderDetail?.requiredDate.substring(0, 10)}</p>
        </div>
        <p className="center">
          <NumberFormat
            value={orderDetail?.orderTotal}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rs."}
          />
        </p>
        <div className="card-action">
          <a href="#">View Items</a>
          <a href="#">Accept Order</a>
          <a href="#">Delete Order</a>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
