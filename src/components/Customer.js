// import { Formik } from "formik";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Customer = () => {
//     const [customers, setCustomers] = useState([]);
//     const [renderList, setRenderList] = useState([]);


//     const handleAdminSubmit = (customer) => {
//         axios.post('', customer).then(res => {

//         }).catch(err => {

//         })
//     }

//     const deleteCustomer = (id) => {
//         axios.delete(`http://localhost:1234/api/v1/customer/deleteCustomer/${id}`).then(res => {
//             loadAllCustomers();
//         }).catch(err => {

//         })
//     }
//     // axios.put('http://localhost:1234/api/v1/customer/updateCustomer', customer).then(res => {

//     // }).catch(err => {

//     // })
// }

// const renderBasingInput = (e) => {
//     const userInput = e.target.value;
//     let list = [];
//     if (userInput !== '') {
//         customers.map((customer) => {
//             if (
//                 customer.customerName
//                     .toString()
//                     .toLowerCase()
//                     .startsWith(userInput.toLowerCase())
//             ) {
//                 list.push(customer);
//             }
//         });
//     } else {
//         list = customers;
//     }
//     setRenderList(list);
// }

// const loadAllCustomers = () => {
//     axios.get('http://localhost:1234/api/v1/customer/findAllCustomers').then(({ data }) => {
//         if (data.isDone) {
//             setRenderList(data.data);
//             setCustomers(data.data);
//         } else {
//             toast("Error please try again", { type: 'error' });
//         }
//     }).catch(err => {
//         toast("Error please try again", { type: 'error' });
//     })
// }


// const setToTheFormOnClick = (e) => {
//     console.log('clicked');
//     const data = Array.prototype.slice.call(e.target.parentElement.children);
//     if (data.length) {
//         const customerName = data[0].innerText;
//         const customerAddress = data[1].innerText;
//         const customerMobile = data[2].innerText;
//         const customerNIC = data[3].innerText;

//         setCustomerDetail({
//             customerName,
//             customerAddress,
//             customerMobile,
//             customerNIC,
//         })
//     }
// }

// useEffect(() => {
//     loadAllCustomers();
// }, [])

// return (

//     <div className="container">
//         <div className="row mt-5">
//             <div className="col-5">
//                 <Formik
//                     initialValues={{ customerName: '', customerAddress: '', customerMobile: '', customerNIC: '' }}
//                     onSubmit={(value, action) => {
//                         console.log('Heyyy', value);
//                     }}


//                 >
//                     {(props) => (
//                         <form>
//                             <h3 className="blue-text">Manage Customer</h3>
//                             <div className="form-group">
//                                 <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Customer Name" value={props.values.customerName} onChange={props.handleChange('customerName')} onBlur={props.handleBlur('customerName')} value={props.values.customerName ? props.values.customerName : customerDetail.customerName} />
//                             </div>
//                             <div className="form-group">
//                                 <input type="text" className="form-control" placeholder="Customer Address" value={props.values.customerAddress ? props.values.customerAddress : customerDetail.customerAddress} onChange={props.handleChange('customerAddress')} onBlur={props.handleBlur('customerAddress')} />
//                             </div>
//                             <div className="form-group">
//                                 <input type="text" className="form-control" placeholder="Customer NIC" value={props.values.customerNIC ? props.values.customerNIC : customerDetail.customerNIC} onChange={props.handleChange('customerNIC')} onBlur={props.handleBlur('customerNIC')} />
//                             </div>
//                             <div className="form-group">
//                                 <input type="text" className="form-control" placeholder="Customer Mobile" value={props.values.customerMobile ? props.values.customerMobile : customerDetail.customerMobile} onChange={props.handleChange('customerMobile')} onBlur={props.handleBlur('customerMobile')} />
//                             </div>
//                             <Link class="waves-effect waves-light btn-small mr-4" onClick={props.handleSubmit}><i class="material-icons left">cloud</i>button</Link>
//                             <Link class="waves-effect waves-light btn-small"><i class="material-icons left">cloud</i>button</Link>
//                         </form>
//                     )}
//                 </Formik>
//             </div>
//             <div className="col-7">
//                 <input placeholder="Type to search" className="card-panel w-50 mb-4" onChange={renderBasingInput} />
//                 <table>
//                     <thead className="text-white card-panel teal">
//                         <tr>
//                             <th>Name</th>
//                             <th>Address</th>
//                             <th>Mobile</th>
//                             <th>NIC</th>
//                             <th>Delete</th>
//                             <th>Update</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {renderList && renderList.map(customer => {
//                             return <tr>
//                                 <td>{customer.customerName}</td>
//                                 <td>{customer.customerAddress}</td>
//                                 <td>{customer.customerMobile}</td>
//                                 <td>{customer.customerNIC}</td>
//                                 <td><button class="btn-sm btn-danger" onClick={() => { deleteCustomer(customer._id) }}>Delete</button></td>
//                                 <td><button class="btn-sm btn-danger" onClick={(e) => { updateCustomer(e, customer._id) }}>Delete</button></td>
//                             </tr>
//                         })}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     </div>)
// }

// export default Customer;
