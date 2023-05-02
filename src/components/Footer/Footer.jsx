import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bottom-0'>
             <Navbar fixed="bottom" className= "bg-info bg-opacity-10">
        <Container className='justify-content-center'>
          <Navbar.Brand>
            <p ><small>&copy;copyright Thai Test</small></p>
          </Navbar.Brand>
        </Container>
      </Navbar>
            
        </div>
    );
};

export default Footer;