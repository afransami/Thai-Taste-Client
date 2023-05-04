import React from "react";
import { Container } from "react-bootstrap";
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
    recipe
  } = singleRecipe;

  return (
    <div>
      <Container>
        <div className="d-flex justify-content-between gap-4 mt-5 p-2 border rounded shadow">
          <div className="flex-sm-row-reverse">
            <img src={chefPhoto} alt="" />
            <div className="">
              <h2>{chefName}</h2>
              <p>{bio}</p>
              <div className="d-flex justify-content-between">
                <p>Likes: {like}</p>
                <p>Number of Recipe: {numRecipes}</p>
                <p>Experience: {yearOfExperience}</p>
              </div>
            </div>
          </div>
        </div>
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
