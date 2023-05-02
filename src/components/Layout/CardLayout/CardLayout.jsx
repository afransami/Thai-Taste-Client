import React from 'react';
import Header from '../../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Home from '../../Home/Home';

const CardLayout = () => {
    return (
        <div>
            <Header></Header>            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default CardLayout;