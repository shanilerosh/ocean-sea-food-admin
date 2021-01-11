import React, { useState, useEffect } from "react";
import { ButtonGroup, Dropdown, Form, Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from "axios";
import { toast } from "react-toastify";
import NumberFormat from "react-number-format";

const userSchema = yup.object({
    username: yup.string().min(4).required(),
    password: yup.string().min(8).required(),
    monthlyTarget: yup.number().moreThan(10000).typeError("Montly target must be more that Rs.10,000").required(),
    state: yup.string().required(),
})

const User = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const saveUser = (user) => {
        console.log("befffffffff", user)
        axios.post('https://ocean-sea-food-api.herokuapp.com/api/v1/user/saveUser', user).then(({ data }) => {
            console.log(data);
            if (data.isDone) {
                toast("Item Successfully Added", { type: 'success' });
                loadUsers();
            } else {
                toast(`${data.data}`, { type: 'error' });
            }
        }).catch(err => {
            toast("Error please try again", { type: 'error' });
        })
    }

    const loadUsers = () => {
        axios.get('https://ocean-sea-food-api.herokuapp.com/api/v1/user/getAllUsers').then(({ data }) => {
            if (data.isDone) {
                setUsers(data.data);
            } else {
                toast("Error please try again", { type: 'error' });
            }
        }).catch(err => {
            toast("Error please try again", { type: 'error' });
        })
    }


    const deleteUser = (id) => {
        axios.post('https://ocean-sea-food-api.herokuapp.com/api/v1/user/deleteUser', { id }).then(({ data }) => {
            if (data.isDone) {
                loadUsers();
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
                    initialValues={{ username: '', password: '', monthlyTarget: '', state: 'active' }}
                    validationSchema={userSchema}
                    onSubmit={(value, action) => {
                        saveUser(value);
                        action.resetForm();
                    }}>
                    {(props) =>
                        (<Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter User Name"
                                    onChange={props.handleChange('username')}
                                    value={props.values.username}
                                    onBlur={props.handleBlur('username')}
                                    autoComplete="off"
                                />
                                <Form.Text className="text-danger">
                                    {props.touched.username && props.errors.username}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Passsword</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                    onChange={props.handleChange('password')}
                                    value={props.values.password}
                                    onBlur={props.handleBlur('password')}
                                    autoComplete="off"
                                />
                                <Form.Text className="text-danger">
                                    {props.touched.password && props.errors.password}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formtarget">
                                <Form.Label>Montly Target</Form.Label>
                                <Form.Control type="text" placeholder="Monthly Target"
                                    onChange={props.handleChange('monthlyTarget')}
                                    value={props.values.monthlyTarget}
                                    onBlur={props.handleBlur('monthlyTarget')}
                                    autoComplete="off"
                                />
                                <Form.Text className="text-danger">
                                    {props.touched.monthlyTarget && props.errors.monthlyTarget}
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
                            <th>User Name</th>
                            <th>Role</th>
                            <th>State</th>
                            <th>Target</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map(usr => {
                            return (
                                <tr key={usr._id}>
                                    <td>{usr.username}</td>
                                    <td>{usr.role}</td>
                                    <td>{usr.role == 'agent' ? <button className="btn btn-warning btn-sm">{usr.state}</button> : 'Admin'}</td>
                                    <td>{usr.role == 'agent' ? (<NumberFormat
                                        value={usr.monthlyTarget}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"Rs."}
                                    />) : 'Admin'}</td>
                                    <td>{usr.role == 'agent' ? (<button className="btn btn-danger btn-sm" onClick={() => deleteUser(usr._id)}>Delete</button>) : "Admin"}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    </div>);
};

export default User;
