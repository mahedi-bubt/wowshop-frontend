import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import AllProduct from '../AllProduct/AllProduct';

const AllProducts = ({ singleProduct }) => {
    const [allProducts] = useProducts();

    const style = {
        services_container: {
            marginTop: "70px"
        },
        servicesTop: {
            marginBottom: "50px"
        },
        hr: {
            borderBottom: "1px solid black",
            margin: "auto",
            width: "250px"
        }
    }
    return (

        <div id="products">
            <Container style={style.services_container}>
                <div style={style.servicesTop}>
                    <h2 className="text-primary text-center">All Products</h2>
                    <hr style={style.hr} />
                </div>
                <Row xs={1} md={3} className="g-4">
                    {
                        allProducts.map(p => <AllProduct
                            key={p.name}
                            singleProduct={p}
                        ></AllProduct>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllProducts;