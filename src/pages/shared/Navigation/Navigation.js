import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {

    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container id="home">
                    <Navbar.Brand href="#home">WOW-SHOP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto navbar-link">
                            <HashLink className="nav-link" to="/home#home">Home</HashLink>
                            <HashLink className="nav-link" to="/home#products">Products</HashLink>
                            <Link className="nav-link" to="/about">About</Link>
                            <HashLink className="nav-link" to="/home#contact">Contact</HashLink>
                        </Nav>

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
                        <span className="nav-link">{user?.displayName}</span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;