import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';


const Footer = () => {
    return (
        
          <div bg="primary" variant="light" className="bg-info bg-opacity-10 pt-3">
            <Container>
        <Row>
          <Col md={12}>
            <h3>About Thai Test</h3>
            <p>Thai Test Recipe is your one-stop-shop for finding delicious and healthy recipes for every meal of the day. Our mission is to help people live a healthier and happier life by providing them with easy-to-follow recipes that are both nutritious and tasty.</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="/">Home</a></li>
              <li className="list-inline-item"><a href="/blog">Blog</a></li>
              <li className="list-inline-item"><a href="/login">Profile</a></li>
              <li className="list-inline-item"><a href="/register">Contact Us</a></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={12}>
            <p className="text-muted">© 2023 Thai Test. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
          </div>     
    );
};

export default Footer;