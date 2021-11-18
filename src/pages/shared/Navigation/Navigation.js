import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {

    const { user, logOut, admin } = useAuth();

    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container id="home">
                    <Navbar.Brand href="#home">WOW-SHOP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {
                            admin ?
                                <Nav className="ms-auto navbar-link">
                                    <Link className="nav-link" to="/dashboard">Admin Dashboard</Link>
                                </Nav>
                                : <Nav className="ms-auto navbar-link">
                                    <HashLink className="nav-link" to="/home#home" style={{ color: "white" }}>Home</HashLink>
                                    <HashLink className="nav-link" to="/allproducts" style={{ color: "white" }}>Products</HashLink>
                                    <Link className="nav-link" to="/about" style={{ color: "white" }}>About</Link>
                                    {
                                        user?.email &&
                                        <Nav className="ms-auto navbar-link">
                                            <Link className="nav-link" to="/myorders" style={{ color: "white" }}>My Orders</Link>
                                            <Link className="nav-link" to="/review" style={{ color: "white" }}>Review</Link>
                                            <Link className="nav-link" to="/payment" style={{ color: "white" }}>Pay</Link>
                                        </Nav>
                                    }
                                    <HashLink className="nav-link" to="/home#contact" style={{ color: "white" }}>Contact</HashLink>
                                </Nav>}
                        {
                            user?.email ?
                                <Link to="/home">
                                    <button onClick={logOut} className="btn btn-dark">SignOut</button>
                                </Link>
                                :
                                <Link to="/login">
                                    <button className="btn btn-dark">LogIn</button>
                                </Link>
                        }
                        <span className="nav-link" style={{ color: "white" }}>{user?.displayName}</span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;