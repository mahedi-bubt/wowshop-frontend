import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const ClientSays = () => {
    const [reviewdata, setReviewData] = useState([]);

    useEffect(() => {
        fetch(`https://calm-garden-39470.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => setReviewData(data));
    }, [])

    return (

        <Container>
            <h2 style={{ margin: "100px 0" }}>Our Clients Says</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    reviewdata.map(review =>
                        <Col>
                            <Card border="dark" style={{ width: '18rem' }}>
                                <Card.Header>{review.personname}</Card.Header>
                                <Card.Body>
                                    <Card.Title>Rating: {review.rating} </Card.Title>
                                    <Card.Text>{review.comment}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};
export default ClientSays;