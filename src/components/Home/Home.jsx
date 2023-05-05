import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import Chefs from "../Chefs/Chefs";
import FeaturedRecipes from "../FeaturedRecipes/FeaturedRecipes";

const Home = () => {
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    fetch(
      "https://b7a10-chef-recipe-hunter-server-side-afransami-afransami.vercel.app/data"
    )
      .then((response) => response.json())
      .then((resData) => setRecipeData(resData));
  }, []);

  console.log(recipeData);

  return (
    <Container>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: 600 }}
            src="https://i.ibb.co/q5MZ9Mn/food-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="cover-caption">
            <h1>The Thai Taste</h1>
            <h3>An ultimate Taste</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: 600 }}
            src="https://i.ibb.co/V9MtHbF/food-6.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>The Thai Taste</h1>
            <h3>An ultimate Taste</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: 600 }}
            src="https://i.ibb.co/gdLbxf4/cover-Photo.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>The Thai Taste</h1>
            <h3>An ultimate Taste</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="mt-5 text-center ">
        <h1>Meet Our chefs</h1>
      </div>

      <Container>
        <Row>
          <Col className="card-deck gap-5 d-flex flex-wrap align-items-center justify-content-evenly">
            {recipeData?.map((recipe) => (
              <Card style={{ width: 500 }} key={recipe.id}>
                <Card.Img
                  variant="top"
                  className="w-100 img-fluid"
                  src={recipe.chefPhoto}
                />
                <Card.Body>
                  <Card.Title>{recipe.chefName}</Card.Title>

                  <Link to={`/data/${recipe?.id}`}>
                    <Button variant="primary">View Recipes</Button>
                  </Link>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-evenly ">
                  <small className="text-muted">Like:{recipe.like}</small>
                  <small>
                    <Card.Text>Experience: {recipe.yearOfExperience}</Card.Text>
                  </small>
                  <small>
                    <Card.Text>Recipes: {recipe.numRecipes}</Card.Text>
                  </small>
                </Card.Footer>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
      <Chefs></Chefs>
      <FeaturedRecipes></FeaturedRecipes>
    </Container>
  );
};

export default Home;
