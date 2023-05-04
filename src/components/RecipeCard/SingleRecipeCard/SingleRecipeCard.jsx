import React, { useState } from "react";
import RecipeCard from "../RecipeCard";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button, Toast } from "react-bootstrap";

const SingleRecipeCard = ({ singleRecipe }) => {
  const { ingredients, name, method, rating } = singleRecipe;

  const [isFavorite, setIsFavorite] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(true);
    setShowToast(true);
  };

  const handleToastClose = () => {
    setShowToast(false);
  };

  return (
    <div className="res-card border rounded shadow">
      <h4>Recipe Name:{name}</h4>

      {ingredients.map((item, index) => (
        <p key={index}>
          {index + 1} . {item}
        </p>
      ))}

      <p>
        <span className="fw-bold">Recipe Cooking Method:</span>
        {method}
      </p>

      <div>
        <div className="d-flex align-items-center justify-between-center ">
          <span>Recipe Rating:</span>
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          <span className="me-4"> {rating}</span>

          <Button
            variant="primary"
            disabled={isFavorite}
            onClick={handleFavoriteClick}
          >
            {isFavorite ? "Favorited!" : "Add to Favorites"}
          </Button>
          <Toast show={showToast} onClose={handleToastClose}>
            <Toast.Header>
              <strong className="mr-auto">Favorite Recipe</strong>
            </Toast.Header>
            <Toast.Body>
              This recipe has been added to your favorites!
            </Toast.Body>
          </Toast>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipeCard;
