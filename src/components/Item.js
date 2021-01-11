import React, { useState, useEffect } from "react";
import { Form, Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from "axios";
import { toast } from "react-toastify";
import NumberFormat from "react-number-format";

const itemSchema = yup.object({
    itemName: yup.string().min(4).required(),
    itemPrice: yup.number().typeError("Please Enter a Number").required()
})





const Item = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        loadItems();
    }, []);

    const saveItem = (item) => {
        axios.post('https://ocean-sea-food-api.herokuapp.com/api/v1/item/saveItem', item).then(({ data }) => {
            if (data.isDone) {
                toast("Item Successfully Added", { type: 'success' });
                loadItems();
            } else {
                toast("Error please try again", { type: 'error' });
            }
        }).catch(err => {
            toast("Error please try again", { type: 'error' });
        })
    }

    const loadItems = () => {
        axios.get('https://ocean-sea-food-api.herokuapp.com/api/v1/item/getAllItems').then(({ data }) => {
            if (data.isDone) {
                setOrders(data.data);
            } else {
                toast("Error please try again", { type: 'error' });
            }
        }).catch(err => {
            toast("Error please try again", { type: 'error' });
        })
    }

    const deleteItem = (id) => {
        axios.post('https://ocean-sea-food-api.herokuapp.com/api/v1/item/deleteItem', { id }).then(({ data }) => {
            if (data.isDone) {
                loadItems();
                toast("Item has been deleted", { type: 'error' });
            } else {
                toast("Error please try again", { type: 'error' });
            }
        }).catch(err => {
            toast("Error please try again", { type: 'error' });
        })
    }

    return (<div className="container mt-5">
        <div className="row">
            <div className="col-5">
                <Formik
                    initialValues={{ itemName: '', itemPrice: '' }}
                    validationSchema={itemSchema}
                    onSubmit={(value, action) => {
                        saveItem(value);
                        action.resetForm();
                    }}>
                    {(props) =>
                        (<Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Item Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Item Name"
                                    onChange={props.handleChange('itemName')}
                                    value={props.values.itemName}
                                    onBlur={props.handleBlur('itemName')}
                                    autoComplete="off"
                                />
                                <Form.Text className="text-danger">
                                    {props.touched.itemName && props.errors.itemName}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="Price"
                                    onChange={props.handleChange('itemPrice')}
                                    value={props.values.itemPrice}
                                    onBlur={props.handleBlur('itemPrice')}
                                    autoComplete="off"
                                />
                                <Form.Text className="text-danger">
                                    {props.touched.itemPrice && props.errors.itemPrice}
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mr-4" onClick={props.handleSubmit}>
                                Submit
                            </Button>
                            <Button variant="danger" onClick={props.resetForm}>
                                Cancel
                            </Button>
                        </Form>)
                    }
                </Formik>
            </div>
            <div className="col-7">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Item Id</th>
                            <th>Item Name</th>
                            <th>Item Price</th>
                            <th>Delete Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders && orders.reverse().map(ord => {
                            return (
                                <tr key={ord._id}>
                                    <td>I-{ord._id.substring(0, 4)}</td>
                                    <td>{ord.itemName}</td>
                                    <td>
                                        <NumberFormat
                                            value={ord.itemPrice}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"Rs."}
                                        />
                                    </td>
                                    <td><button className="btn btn-danger btn-small" onClick={() => deleteItem(ord._id)}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    </div>);
};

export default Item;
