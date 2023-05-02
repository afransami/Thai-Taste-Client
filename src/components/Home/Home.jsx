import React, { useEffect, useState } from "react";
import cover from "../../../public/images/coverPhoto.jpg";
import { Button, Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData, useParams } from "react-router-dom";
import './Home.css'


const Home = () => {
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    fetch("https://assignment-ten-server-ten.vercel.app/data")
      .then((response) => response.json())
      .then((data) => setRecipeData(data));
  }, []);

  console.log(recipeData);

  return (


<div className="cardBody">
{recipeData[0]?.recipes.map((recipe) => (
          <div key={recipe.id} className="res-card">
            <img className="fluid w-100" src={recipe.chefPhoto} alt="" />
            <h2>{recipe.chefName}</h2>
            <p>{recipe.bio}</p>
            <p><small>Experience: {recipe.yearOfExperience}</small></p>
            <p><small>Number of Recipes: {recipe.numRecipes}</small></p> 
            <Link to='/login'><Button variant="primary">Go somewhere</Button>
            </Link>
          </div>
        ))}
      </div>

  );
};

export default Home;
