import { Container, Row } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
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
                    <h2 className="text-primary text-center">Our Products</h2>
                    <hr style={style.hr} />
                </div>
                <Row xs={1} md={3} className="g-4">
                    {
                        allProducts.map(p => <Product
                            key={p.name}
                            singleProduct={p}
                        ></Product>).slice(0, 6)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;