import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="contact-title">
                <h2 className="text-center">Send Your Message</h2>
            </div>
            {/* Contact form */}
            <Container>
                <Form>
                    <Row className="first-row">
                        <Col>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Your Email" />
                        </Col>
                    </Row>
                    <Row className="second-row">
                        <Col>
                            <Form.Control placeholder="Last name" />
                        </Col>
                        <Col>
                            <Form.Control as="textarea" rows={3} placeholder="Your Comments" />
                            <Button className="send-btn" variant="dark">Send Comment</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
};

export default Contact;