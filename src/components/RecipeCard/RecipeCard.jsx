import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const RecipeCard = () => {
    const { id } = useParams();

    useEffect(() => {
      fetch(`http://localhost:5000/data/${id}`)
        .then((res) => res.json())
        .then((data) => console.log(data.recipes));
    }, []);
  
    console.log(id);
    return (
        <div className="blog-container">

{data.recipes?.recipes.map((recipe) => (
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
        ))}
                        
      </div>
    )
    
    // <div>ServiceDetails page</div>;
  };

export default RecipeCard;