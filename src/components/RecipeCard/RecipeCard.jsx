import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router-dom';


const RecipeCard = () => {
  const singleData = useLoaderData();
  const {
    id,
    chefName,
    chefPhoto,
    bio
  } = singleData;


  // const [singleResData, setSingleResData] = useState([]);

  //   useEffect(() => {
  //     fetch(`http://localhost:5000/singleRecipe/${id}`)
  //       .then((res) => res.json())
  //       .then((singleData) => setSingleResData(singleData.recipes));
  //   }, []);  
  //  console.log(singleResData, id)

    return (
        <div className="blog-container">
<Card>
        <Card.Img variant="top" src={chefPhoto} />
        <Card.Body>
          <Card.Title>{chefName}</Card.Title>
          <Card.Text>{bio}</Card.Text>
          <Link to={`/singleRecipe/${id}`}>
            <Button variant="danger">
              <FaArrowLeft /> All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
{/* {singleResData.recipes?.recipes.map((recipe) => (
          <div key={recipe.id} className="res-card">
            <img className="fluid w-100" src={recipe.name} alt="" />
            <h2>{recipe.ingredients}</h2>           
            <ul>
              {recipe.items.map((item) => (
                <li key={item.id}>
                  {item.name}
                </li>
              ))}
            </ul>
            <p>Method: ${recipe.method}</p>
            <Link ><Button variant="info">Add bookmark</Button>
            </Link>            
          </div>
        ))} */}
                        
      </div>
    )
    
    // <div>ServiceDetails page</div>;
  };

export default RecipeCard;