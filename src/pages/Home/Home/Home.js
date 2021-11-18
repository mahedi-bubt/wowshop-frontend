import React from 'react';
import Footer from '../../shared/Footer/Footer';
import ClientSays from '../ClientSays/ClientSays';
import Contact from '../Contact/Contact';
import HeaderSlider from '../HeaderSlider/HeaderSlider';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <HeaderSlider></HeaderSlider>
            <Products></Products>
            <ClientSays></ClientSays>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;