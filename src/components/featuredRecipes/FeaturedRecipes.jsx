import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import recipesData from "../../assets/featuredRecipes.json";

const recipes = recipesData.featuredRecipes;

const FeaturedRecipes = () => {
  console.log(recipes);
  console.log(typeof recipes);

  return (
    <Container className="mt-5">
      <h2>Featured Recipes</h2>
      <Row>
        <Col className="card-deck gap-5 d-flex  flex-wrap align-items-center flex-sm-nowrap justify-content-evenly">
          {recipes.map((recipe, index) => (
            <Card
              className="d-flex flex-sm-wrap flex-sm-column"
              style={{ width: 500 }}
              key={index}
            >
              <Card.Img
                variant="top"
                className="w-100 img-fluid"
                style={{ height: 200 }}
                src={recipe.imageUrl}
              />
              <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text>{recipe.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{recipe.rating} stars</small>
              </Card.Footer>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedRecipes;
