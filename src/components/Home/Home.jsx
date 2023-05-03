import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useLoaderData, useParams } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((resData) => setRecipeData(resData));
  }, []);

  console.log(recipeData);

  return (
    <Container className="cardBody">
      {recipeData?.map((recipe) => (
        <div key={recipe.id} className="res-card">
          <img className="fluid w-100" src={recipe.chefPhoto} alt="" />
          <h2>{recipe.chefName}</h2>
          <p>{recipe.bio}</p>
          <p>
            <small>Experience: {recipe.yearOfExperience}</small>
          </p>
          <p>
            <small>Number of Recipes: {recipe.numRecipes}</small>
          </p>
          <div className="d-flex justify-between-center gap-4">
            <Link to={`/singleRecipe/${recipe?.id}`}>
              <Button variant="primary">Details</Button>
            </Link>
            <Link>
              <Button variant="info">Add bookmark</Button>
            </Link>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Home;
