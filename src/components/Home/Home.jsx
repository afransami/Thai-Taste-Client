import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
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
    <Container className="cardBody">
      {recipeData?.map((recipe) => (        
        <div key={recipe.id} className="res-card">
          <img className="fluid w-100" src={recipe.chefPhoto} alt="" />
          <h2>{recipe.chefName}</h2>       
          <p>
            <small>Experience: {recipe.yearOfExperience}</small><br />
            <small>Number of recipes: {recipe.numRecipes}</small><br />
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
  );
};

export default Home;
