import React from 'react';
import Header from '../../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';


const CardLayout = () => {
    return (
        <div className='d-flex flex-column justify-content-between'>
           <div >
           <Header></Header>            
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default CardLayout;