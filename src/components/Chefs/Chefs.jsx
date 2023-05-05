import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import "./Chefs.css";

const Chefs = () => {
  return (
    <div className="mt-5">
      <h1>Special Chef</h1>
      <Row className="flex-column flex-sm-row">
        <Col>
          <div className="d-flex flex-column">
            <Col className="h-100">
              <div className="bg-info bg-opacity-10 rounded p-3 text-justify">
                <h3>Ian Kittichai</h3>
                Chef Ian Kittichai, who is known for his innovative approach to
                traditional Thai cuisine. He has cooked for royalty,
                celebrities, and political leaders, and has won numerous awards
                for his culinary creations. Chef Kittichai is also an advocate
                for sustainable and organic ingredients, and has launched
                several successful restaurants in Thailand and around the world.
                He is highly respected in the culinary community for his
                creativity, expertise, and dedication to preserving and sharing
                the rich culinary traditions of Thailand.
              </div>
            </Col>

            <Col className="h-100">
              <div className="bg-info bg-opacity-10 rounded p-3 text-justify">
                <h3>Speciality:</h3>
                Chef Ian Kittichai, who is known for his innovative approach to
                traditional Thai cuisine. He has cooked for royalty,
                celebrities, and political leaders, and has won numerous awards
                for his culinary creations. Chef Kittichai is also an advocate
                for sustainable and organic ingredients, and has launched
                several successful restaurants in Thailand and around the world.
                He is highly respected in the culinary community for his
                creativity, expertise, and dedication to preserving and sharing
                the rich culinary traditions of Thailand.
              </div>
            </Col>
          </div>
        </Col>

        <Col>
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                style={{ height: 400 }}
                src="https://i.ibb.co/tsD3PYV/abdalla-m-Lmv0-Y9q-IABc-unsplash.jpg"
                alt="First slide"
              />
              <Carousel.Caption className="caption">
                <h1>The Thai Taste</h1>
                <h3>An ultimate Taste</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                style={{ height: 400 }}
                src="https://i.ibb.co/q7PmKZW/mohamed-nohassi-Ddgl-Eo-IC2y4-unsplash-1.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h1>The Thai Taste</h1>
                <h3>An ultimate Taste</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                style={{ height: 400 }}
                src="https://i.ibb.co/b7Hfry5/petr-sevcovic-e5-Q5v-WO55u-U-unsplash-1.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h1>The Thai Taste</h1>
                <h3>An ultimate Taste</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default Chefs;
