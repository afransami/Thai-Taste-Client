import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";

const RecipeCard = () => {
  const { id } = useParams();
  const singleRecipe = useLoaderData();
  
  console.log(id);

  return (
  
   
    
    <Container className="mx-auto">
    {singleRecipe?.map((recipe) => (
         <div>
           <div className="d-flex flex-row w-75 gap-4 align-items-center">
             <div>
             <img src={recipe.chefPhoto} alt="" />
             <h5>{recipe.chefName}</h5>
             </div>
             <p>{recipe.bio}</p>
             <p></p>

             <ul>
              {recipe?.recipe?.map((item) => (
                <li key={item?.id}>
                  {item?.ingredients}
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
