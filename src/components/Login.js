import { Formik } from "formik";
import React from "react";
import { Form, Button } from "react-bootstrap";
import './styling/LoginStyling.css'
import * as yup from 'yup';
import axios from "axios";
import { toast } from "react-toastify";


const loginSchema = yup.object({
    username: yup.string().min(4).required(),
    password: yup.string().min(6).required()
});


const Login = () => {

    const logInAdmin = (user) => {
        axios.post('http://localhost:1234/api/v1/user/checkAdmin', user).
            then(({ data }) => {
                if (data.isDone) {
                    toast(data.data, { type: 'success' });
                } else {
                    toast(data.data, { type: 'error' });
                }
            }).catch(err => {
                toast("Error.Please Try again", { type: 'error' });
            })
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-4 m-auto">
                    <Formik
                        initialValues={{ username: '', password: '' }}
                        validationSchema={loginSchema}
                        onSubmit={(value, action) => {
                            console.log(value);
                            logInAdmin(value);
                            action.resetForm();
                        }}
                    >
                        {(props) => (
                            <Form className="p-5 border mt-5">
                                <h4 className="mb-4 text-center">Welcome Admin,</h4>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" className="form-control form-control-sm" au
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
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" className="form-control form-control-sm"
                                        onChange={props.handleChange('password')}
                                        value={props.values.password}
                                        onBlur={props.handleBlur('password')}
                                        autoComplete="off"
                                    />
                                    <Form.Text className="text-danger">
                                        {props.touched.password && props.errors.password}
                                    </Form.Text>
                                </Form.Group>
                                <Button className="btn-sm mr-2" variant="success" type="submit" onClick={props.handleSubmit}>
                                    Submit
                            </Button>
                                <Button className="btn-sm" variant="danger" type="submit" onClick={props.resetForm}>
                                    Cancel
                        </Button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Login;
