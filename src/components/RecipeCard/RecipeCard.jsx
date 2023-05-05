import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import "@smastrom/react-rating/style.css";
import SingleRecipeCard from "./SingleRecipeCard/SingleRecipeCard";

const RecipeCard = () => {
  const singleRecipe = useLoaderData();
  const {
    id,
    chefName,
    chefPhoto,
    bio,
    numRecipes,
    yearOfExperience,
    like,
    recipe,
  } = singleRecipe;

  return (
    <div>
      <Container>
        <Row>
          <Col className="card-deck gap-5 d-flex flex-wrap align-items-center justify-content-evenly">
            <Card className="w-75">
              <Card.Img
                variant="top"
                className="w-100 img-fluid"
                src={chefPhoto}
              />
              <Card.Body>
                <Card.Title>{chefName}</Card.Title>
                <Card.Text>Biography: {bio}</Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-evenly ">
                <small className="text-muted">Like:{like}</small>
                <small>
                  <Card.Text>Experience: {yearOfExperience}</Card.Text>
                </small>
                <small>
                  <Card.Text>Recipes: {numRecipes}</Card.Text>
                </small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>

        <div className="cardBody">
          {recipe.map((singleRecipe, index) => (
            <SingleRecipeCard
              key={index}
              singleRecipe={singleRecipe}
            ></SingleRecipeCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default RecipeCard;
