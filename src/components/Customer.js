import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';

const Customer = () => {
    const [customers, setCustomers] = useState([]);
    const [renderList, setRenderList] = useState([]);

    const handleAdminSubmit = (customer) => {
        axios.post('', customer).then(res => {

        }).catch(err => {

        })
    }

    const deleteCustomer = (id) => {
        axios.delete(`http://localhost:1234/api/v1/customer/deleteCustomer/${id}`).then(res => {
            loadAllCustomers();
        }).catch(err => {

        })
    }

    const updateCustomer = (id) => {
        axios.put('http://localhost:1234/api/v1/customer/updateCustomer', { id }).then(res => {

        }).catch(err => {

        })
    }

    const renderBasingInput = (e) => {
        const userInput = e.target.value;
        let list = [];
        if (userInput !== '') {
            customers.map((customer) => {
                if (
                    customer.customerName
                        .toString()
                        .toLowerCase()
                        .startsWith(userInput.toLowerCase())
                ) {
                    list.push(customer);
                }
            });
        } else {
            list = customers;
        }
        setRenderList(list);
    }

    const loadAllCustomers = () => {
        axios.get('http://localhost:1234/api/v1/customer/findAllCustomers').then(({ data }) => {
            if (data.isDone) {
                setRenderList(data.data);
                setCustomers(data.data);
            } else {
                toast("Error please try again", { type: 'error' });
            }
        }).catch(err => {
            toast("Error please try again", { type: 'error' });
        })
    }

    useEffect(() => {
        loadAllCustomers();
    }, [])

    console.log(customers);
    return (

        <div className="container">
            <div className="row mt-5">
                <div className="col-5">
                    <Formik
                        initialValues={{ customerName: '', customerAddress: '', customerMobile: '', customerNIC: '' }}
                        onSubmit={(value, action) => {
                            console.log(action);
                        }}
                    >
                        {(props) => (
                            <form>
                                <h3 className="blue-text">Manage Customer</h3>
                                <div className="form-group">
                                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Customer Name" value={props.values.customerName} onChange={props.handleChange('customerName')} onBlur={props.handleBlur('customerName')} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Customer Address" value={props.values.customerAddress} onChange={props.handleChange('customerAddress')} onBlur={props.handleBlur('customerAddress')} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Customer NIC" value={props.values.customerNIC} onChange={props.handleChange('customerNIC')} onBlur={props.handleBlur('customerNIC')} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Customer Mobile" value={props.values.customerMobile} onChange={props.handleChange('customerMobile')} onBlur={props.handleBlur('customerMobile')} />
                                </div>
                                <Link class="waves-effect waves-light btn-small mr-4" onClick={props.handleSubmit}><i class="material-icons left">cloud</i>button</Link>
                                <Link class="waves-effect waves-light btn-small"><i class="material-icons left">cloud</i>button</Link>
                            </form>
                        )}
                    </Formik>
                </div>
                <div className="col-7">
                    <input placeholder="Type to search" className="card-panel w-50 mb-4" onChange={renderBasingInput} />
                    <table>
                        <thead className="text-white card-panel teal">
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Mobile</th>
                                <th>NIC</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderList && renderList.map(customer => {
                                return <tr>
                                    <td>{customer.customerName}</td>
                                    <td>{customer.customerAddress}</td>
                                    <td>{customer.customerMobile}</td>
                                    <td>{customer.customerNIC}</td>
                                    <td><button class="btn-sm btn-danger" onClick={() => { deleteCustomer(customer._id) }}>Delete</button></td>
                                    <td><button class="btn-sm btn-danger" onClick={() => { updateCustomer(customer._id) }}>Delete</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>)
}

export default Customer;
