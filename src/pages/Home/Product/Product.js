import React from 'react';
import { Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ singleProduct }) => {
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
                        <Link to={`/placeorder/${singleProduct?._id}`}>
                            <Button variant="outline-dark">Order Now</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Product;