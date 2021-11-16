import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './LogIn.css'

const LogIn = () => {
    const { loginUser, signInWithGoogle, authError } = useAuth();
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(field, value, newLoginData);
        setLoginData(newLoginData);
    }

    const handleLogIn = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <div className=" form App">
            {/* {error && <Alert variant="danger">{error}</Alert>} */}

            <form onSubmit={handleLogIn}>
                <h2>Sign In</h2>
                <fieldset>
                    {/* <legend>Create Account</legend> */}
                    <ul>
                        <li>
                            <label htmlFor="email">Email:</label>
                            <input onChange={handleOnChange} type="email" id="email" name="email" required />
                        </li>
                        <li>
                            <label htmlFor="password">Password:</label>
                            <input onChange={handleOnChange} type="password" id="password" name="password" required />
                        </li>
                    </ul>
                </fieldset>
                <div>
                    <button>Submit</button>
                    <p>New User?
                        <Link to="/register" style={{ textDecoration: "none" }}> Create Account Here... </Link>
                    </p>
                    <button onClick={handleGoogleSignIn}>Google Sign In</button>
                </div>
            </form>
        </div>
    );
};

export default LogIn;