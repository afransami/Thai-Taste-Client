import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaHeart } from "react-icons/fa";
import "./RecipeCard.css";
import SingleRecipeCard from "./SingleRecipeCard/SingleRecipeCard";


const RecipeCard = () => {
  // const { id } = useParams();
  const singleRecipe = useLoaderData();
  const {
    id,
    chefName,
    chefPhoto,
    bio,
    numRecipes,
    rating,
    like,
    recipe,
    recipePhoto,
    yearOfExperience,
  } = singleRecipe;
  // console.log(id, singleRecipe);

  return (
    <div>
      <Container>
        <div className="d-flex justify-content-between gap-4 mt-5 p-2 border rounded shadow">
          <div >
            <img src={chefPhoto} alt="" />
            <div className="">
            <h2>{chefName}</h2>
            <p>{bio}</p>
            <div className="d-flex justify-content-between">
            <p>Likes: {like}</p>
            <p>Number of Recepi: {numRecipes}</p>
            <p>Experience: {yearOfExperience}</p>
            </div>
          </div>
          </div>

          


        </div>
       <div className="cardBody"> 
        {
          recipe.map((singleRecipe, index)=> <SingleRecipeCard key={index} singleRecipe={singleRecipe}></SingleRecipeCard>)}       
        </div>
      </Container>
    </div>    
  );
};

export default RecipeCard;
