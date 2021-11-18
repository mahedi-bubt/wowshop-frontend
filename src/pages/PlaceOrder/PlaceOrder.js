import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { user } = useAuth();
    const { orderId } = useParams();
    const [productdata, setProductData] = useState([]);

    /* console.log(orderId); */

    useEffect(() => {
        fetch(`http://localhost:5000/products/${orderId}`)
            .then(res => res.json())
            .then(data => setProductData(data));
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/placeorder', data)
            .then(res => {
                if (res?.data?.insertedId) {
                    alert('Order Placed Succesfully');
                    reset();
                }
            })
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Card style={{ margin: "140px 0", width: "500px" }}>
                        <Card.Img variant="top" style={{ height: "250px" }} src={productdata?.imageurl} />
                        <Card.Body>
                            <Card.Title>{productdata?.name}</Card.Title>
                            <Card.Text>Price {productdata?.price}</Card.Text>
                            <Card.Text>{productdata?.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <div className="place-order">
                        <h2 style={{ margin: "50px 0" }}>Please Place Your Order</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("personname")} value={user?.displayName} />
                            <input {...register("email")} value={user?.email} />
                            <input {...register("name")} value={productdata?.name} />
                            <input type="number" {...register("price")} value={productdata?.price} />
                            <input type="number" {...register("phonenumber")} placeholder="Enter Your Phone Number" />
                            <textarea {...register("address")} placeholder="Enter Address Here" />

                            <input type="submit" value="Place Order" />
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PlaceOrder;