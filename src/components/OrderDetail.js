import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { Button } from "react-bootstrap";
import { Form, Table } from "react-bootstrap";

function OrderDetail({ orderDetail }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="col-12 s-12 m-12" key={orderDetail._id}>
      <div className="card blue-grey light-1">
        <div className="card-content white-text">
          <p className="orange-text right">{orderDetail._id}</p>
          <p>Customer Name: {orderDetail?.customer?.customerName}</p>
          <p>User Name: {orderDetail?.user?.userName}</p>
          <p>Required Date: {orderDetail?.requiredDate.substring(0, 10)}</p>
        </div>
        <p className="ml-4">
          <NumberFormat
            value={orderDetail?.orderTotal}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rs."}
          />
        </p>
        <div className="card-action">
          <a onClick={handleShow}>View Items</a>
        </div>
        <Modal
          style={{ backgroundColor: "transparent", border: 0 }}
          show={show}
          onHide={handleClose}
          backdrop="false"
        >
          <Modal.Header closeButton>
            <Modal.Title>List of Items</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Item Price</th>
                  <th>Item Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetail.items &&
                  orderDetail.items.map((item) => {
                    return (
                      <tr key={item.itemId}>
                        <td>{item.itemName}</td>
                        <td>
                          <NumberFormat
                            value={item.itemPrice}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"Rs."}
                          />
                        </td>
                        <td>{item.itemQty}</td>
                        <td>
                          <NumberFormat
                            value={item.itemPrice * item.itemQty}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"Rs."}
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default OrderDetail;
