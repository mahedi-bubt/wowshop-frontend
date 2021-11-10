import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const { registerUser, updateUserDetails } = useAuth();
    const [registerData, setRegisterData] = useState({});
    const [error, setError] = useState('');

    /* const location = useLocation();
    const history = useHistory();

    const redirect_url = location?.state?.from || '/home'; */
    const handleOnChange = e => {
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
            registerUser(registerData.email, registerData.password);
            updateUserName();
        }

        /* createUser(email, password)
            .then(result => {
                
            }).catch(err => {
                setError(err);
            });
        updateUserName(); */
        e.preventDefault();
    }
    //user displayname update
    const updateUserName = () => {
        updateUserDetails(registerData.username)
            .then(result => {
                console.log(result);
            }).catch((error) => {

            });
    }

    return (
        <div className=" form App">
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handleRegistration}>
                <h2>Sign Up!</h2>
                <fieldset>
                    <legend>Create Account</legend>
                    <ul>
                        <li>
                            <label htmlFor="username">Username:</label>
                            <input type="text" onChange={handleOnChange} id="username" name="username" required />
                        </li>
                        <li>
                            <label htmlFor="email">Email:</label>
                            <input onChange={handleOnChange} type="email" id="email" name="email" required />
                        </li>
                        <li>
                            <label htmlFor="password">Password:</label>
                            <input onChange={handleOnChange} type="password" id="password" name="password" required />
                        </li>
                        <li>
                            <label htmlFor="password">Confirm-Password:</label>
                            <input onChange={handleOnChange} type="password" id="confirmpassword" name="confirmpassword" required />
                        </li>
                    </ul>
                </fieldset>
                <div>
                    <button>Submit</button>
                    <Link to="/login">
                        <button className="account" type="button">Have an Account?</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Register;