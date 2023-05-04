import React, { useEffect, useState } from "react";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData, useParams } from "react-router-dom";
import "./Home.css";
import RecipeCard from "../RecipeCard/RecipeCard";
import { Rating } from "@smastrom/react-rating";

const Home = () => {
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((resData) => setRecipeData(resData));
  }, []);

  console.log(recipeData);

  return (
    <Container>     
      <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/q5MZ9Mn/food-1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h1>The Thai Test</h1>
                <h3>An ultimate Taste</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/V9MtHbF/food-6.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h1>The Thai Test</h1>
                <h3>An ultimate Taste</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/gdLbxf4/cover-Photo.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h1>The Thai Test</h1>
                <h3>An ultimate Taste</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      <Container className="cardBody">
        {recipeData?.map((recipe) => (
          <div key={recipe.id} className="res-card">
            <img className="fluid w-100" src={recipe.chefPhoto} alt="" />
            <h2>{recipe.chefName}</h2>
            <p>
              <small>Experience: {recipe.yearOfExperience}</small>
              <br />
              <small>Number of recipes: {recipe.numRecipes}</small>
              <br />
              <small>Like: {recipe.like}</small>
            </p>

            <div className="d-flex justify-between-center gap-4">
              <Link to={`/singleRecipe/${recipe?.id}`}>
                <Button variant="primary">View Recipes</Button>
              </Link>
            </div>
          </div>
        ))}
      </Container>
    </Container>
  );
};

export default Home;
