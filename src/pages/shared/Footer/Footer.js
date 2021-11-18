import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {

    const hrborder = {
        borderBottom: "2px solid #000000",
        width: "auto",
        margin: "auto"
    }
    const aboutHrBorder = {
        borderBottom: "1px solid #000000",
        width: "250px",
        margin: "0px"
    }

    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                        <h3>WOW - SHOP</h3>
                        <p style={{ textAlign: "left" }}>WOW-SHOP Ecommerce establish 2021. it is very popular Ecommerce Service in Bangladesh </p>
                    </Col>
                    <Col>
                        <h3>About WOW - SHOP</h3>
                        <hr style={hrborder} />
                        <Navbar>
                            <Nav style={{ display: "block" }}>
                                <Nav.Link style={{ textAlign: "left", color: "white" }} href="">About Us</Nav.Link>
                                <hr style={aboutHrBorder} />
                                <Nav.Link style={{ textAlign: "left", color: "white" }} href="">Contact Us</Nav.Link>
                                <hr style={aboutHrBorder} />
                                <Nav.Link style={{ textAlign: "left", color: "white" }} href="">Site Map</Nav.Link>
                                <hr style={aboutHrBorder} />
                                <Nav.Link style={{ textAlign: "left", color: "white" }} href="">Privacy Policy</Nav.Link>
                                <hr style={aboutHrBorder} />
                            </Nav>
                        </Navbar>
                    </Col>
                    <Col>
                        <h3>Contact Info</h3>
                        <hr style={hrborder} />
                        <h6 style={{ textAlign: "left", paddingTop: "20px" }}>info@wowshop.com.bd</h6>
                        <h6 style={{ textAlign: "left" }}>Call Us: 01788000000</h6>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="footer-copy">
                    <small>&copy; WOW - SHOP Ecommerce.All Rights Reserved</small>
                    <small>Developed By Mahedi</small>
                </div>
            </Container>
        </div>
    );
};

export default Footer;