import React, { useEffect, useState } from "react";
import cover from "../../../public/images/coverPhoto.jpg";
import { Button, Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData, useParams } from "react-router-dom";
import './Home.css'


const Home = () => {
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/data")
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
            <Button variant="primary">Go somewhere</Button>
          </div>
        ))}
      </div>




 
    //   <CardGroup>
    //     {recipeData[0]?.recipes.map((recipe) => (
    //       <Card key={recipe.id} className="w-25">
    //       <Card.Img variant="top" src={recipe.chefPhoto} />
    //       <Card.Body>
    //         <Card.Title>{recipe.chefName}</Card.Title>
    //         <Card.Text>
    //         {recipe.bio}
    //         </Card.Text>
    //       </Card.Body>
    //       <Card.Footer>
    //         <p><small>Experience: {recipe.yearOfExperience}</small></p>
    //         <p><small>Number of Recipes: {recipe.numRecipes}</small></p> 
    // <Button variant="primary">Go somewhere</Button>           
    //       </Card.Footer>
    //     </Card>
    //     ))}
    //   </CardGroup>
    
  );
};

export default Home;
