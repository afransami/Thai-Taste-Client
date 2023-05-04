import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={6}>
          <Image
            src="https://i.ibb.co/H4yVHsN/error-page.jpg"
            alt="Page not found"
            fluid
          />
        </Col>
        <Col xs={12} md={6} className="my-auto">
          <h1>404</h1>
          <h2>Page not found</h2>
          <p>We're sorry, but the page you are looking for does not exist.</p>
          <Link to="/">
            <Button>Go To Homepage</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
