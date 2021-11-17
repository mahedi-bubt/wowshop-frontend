import React from 'react';
import { Container, Table } from 'react-bootstrap';
import usePlaceOrders from '../../hooks/usePlaceOrders';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const [myorders] = usePlaceOrders();
    return (
        <Container>
            <div>
                <h2 style={{ margin: "50px" }}>My Orders</h2>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myorders.map(orders => <MyOrder
                                key={orders._id}
                                order={orders}
                            ></MyOrder>)
                        }
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default MyOrders;