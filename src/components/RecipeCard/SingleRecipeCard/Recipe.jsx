import { useState } from 'react';
import { Button, Toast } from 'react-bootstrap';

function Recipe({ id, title, ingredients, instructions }) {
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
    <>
      <h2>{title}</h2>
      <p>Ingredients: {ingredients}</p>
      <p>Instructions: {instructions}</p>
      <Button
        variant="primary"
        disabled={isFavorite}
        onClick={handleFavoriteClick}
      >
        {isFavorite ? 'Favorited!' : 'Add to Favorites'}
      </Button>
      <Toast show={showToast} onClose={handleToastClose}>
        <Toast.Header>
          <strong className="mr-auto">Favorite Recipe</strong>
        </Toast.Header>
        <Toast.Body>This recipe has been added to your favorites!</Toast.Body>
      </Toast>
    </>
  );
}

export default Recipe;
