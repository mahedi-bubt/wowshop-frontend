import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const { user, registerUser, isLoading } = useAuth();
    const [registerData, setRegisterData] = useState({});
    const [error, setError] = useState('');

    const history = useHistory();

    /* const redirect_url = location?.state?.from || '/home'; */

    const handleonBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        console.log(field, value, newRegisterData);
        setRegisterData(newRegisterData);
    }

    const handleRegistration = (e) => {
        if (registerData.password !== registerData.confirmpassword) {
            alert('Password doesnot match');
            return;
        } else {
            registerUser(registerData.email, registerData.password, registerData.name, history);
        }

        e.preventDefault();
    }

    return (
        <div className=" form App">
            {error && <Alert variant="danger">{error}</Alert>}
            {!isLoading && <form onSubmit={handleRegistration}>
                <h2>Sign Up!</h2>
                <fieldset>
                    <legend>Create Account</legend>
                    <ul>
                        <li>
                            <label htmlFor="username">Username:</label>
                            <input type="text" onBlur={handleonBlur} id="username" name="name" required />
                        </li>
                        <li>
                            <label htmlFor="email">Email:</label>
                            <input onBlur={handleonBlur} type="email" id="email" name="email" required />
                        </li>
                        <li>
                            <label htmlFor="password">Password:</label>
                            <input onBlur={handleonBlur} type="password" id="password" name="password" required />
                        </li>
                        <li>
                            <label htmlFor="password">Confirm-Password:</label>
                            <input onBlur={handleonBlur} type="password" id="confirmpassword" name="confirmpassword" required />
                        </li>
                    </ul>
                </fieldset>
                <div>
                    <button>Register</button>
                    <Link to="/login">
                        <button className="account" type="button">Have an Account?</button>
                    </Link>
                </div>
            </form>}
            {isLoading &&
                <Spinner style={{ margin: "auto" }} animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }
            {
                user?.email &&
                <Alert variant="success">
                    Registration Successful
                </Alert>
            }
        </div>
    );
};

export default Register;