import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <>
        <div className="banner-section">
        <Container>
          <Row>
            <Col>
              <h1>Welcome to My Website</h1>
              <p>This is an example of a responsive homepage.</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* hero section */}
      <div className="hero-section">
        <Container>
          <Row>
            <Col md={8}>
              <h2>Discover the Latest Blog Posts</h2>
              <p>Check out our blog to stay up-to-date on the latest news and trends.</p>
            </Col>
            <Col md={4}>
              <Nav className="justify-content-md-end">
                <Nav.Item>
                  <Nav.Link href="#">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">Profile</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
      </>
    );
};

export default Blog;