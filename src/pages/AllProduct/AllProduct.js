import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllProduct = ({ singleProduct }) => {

    const { name, brandname, price, description, imageurl } = singleProduct;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={imageurl} fluid="true" />
                    <Card.Body>
                        <Card.Title className="text-center">{name}</Card.Title>
                        <Card.Text className="text-center"> {brandname}</Card.Text>
                        <Card.Text className="text-center">Price: {price}</Card.Text>
                        <Card.Text className="text-center"> {description}</Card.Text>
                        <Link to={`/orderplaced/${singleProduct?._id}`}>
                            <Button variant="outline-dark">Book Now</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default AllProduct;