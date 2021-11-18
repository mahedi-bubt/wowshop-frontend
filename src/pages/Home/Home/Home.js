import React from 'react';
import Footer from '../../shared/Footer/Footer';
import ClientSays from '../ClientSays/ClientSays';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Products></Products>
            <ClientSays></ClientSays>
            <Footer></Footer>
        </div>
    );
};

export default Home;