import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
          <Navbar className='justify-content-center bg-info bg-opacity-10' fixed="bottom" bg="light" variant="light">
      <Navbar.Brand> <p ><small>&copy;copyright Thai Test</small></p></Navbar.Brand>
    </Navbar>
             {/* <Navbar className= "bg-info bg-opacity-10">
        <Container className='justify-content-center'>
          <Navbar.Brand fixed="bottom">
            <p ><small>&copy;copyright Thai Test</small></p>
          </Navbar.Brand>
        </Container>
      </Navbar> */}
            
        </div>
    );
};

export default Footer;