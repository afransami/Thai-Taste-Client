import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaHeart } from "react-icons/fa";
import "./RecipeCard.css";

const RecipeCard = () => {
  const { id } = useParams();
  const singleRecipe = useLoaderData();

  console.log(id);

  return (
    <Container className="cardBody">
      {singleRecipe?.map((recipe) => (
        <div key={recipe.id} className="res-card d-flex">
          <div>
            <img className="fluid w-100" src={recipe.chefPhoto} alt="" />
            <h2>{recipe.chefName}</h2>
            <p>{recipe.bio}</p>
            <p>
              <small>Experience: {recipe.yearOfExperience}</small> <br />
              <small>Number of Recipes: {recipe.numRecipes}</small>
              <br />
              <small>Likes: {recipe.like}</small>
              <div className="d-flex align-items-center justify-between-center ">
              <p>Rating:</p>
              <Rating
                style={{ maxWidth: 150 }}
                value={Math.round(recipe.item?.rating.number || 0)}
                readOnly
              />
              <span className="ms-2"> {recipe.item?.rating.number}</span>
            </div>  
            </p>


            <div className="d-flex justify-between-center gap-4">
            <div>
              <FaHeart className="text-danger"></FaHeart>
            </div>
            <Link to="/">
              <Button variant="primary">Go Home</Button>
            </Link>            
          </div>
          </div>
          
          <div className="d-flex justify-between-center gap-4">
            <ul>
              {recipe.recipe?.map((item) => (
                <li key={item?.id}>                  
                  <h5 className="mt-3">Recipe Name: {item.name}</h5>
                  <span>
                    <h6>Recipe Ingredients:</h6> {item.ingredients}
                  </span>{" "}
                  <br />
                  <span>
                    <h6>Cooking Method:</h6> {item.method}
                  </span>
                </li>
              ))}
            </ul>          
          </div>
        </div>        
      ))}      
    </Container>
  );
};

export default RecipeCard;
