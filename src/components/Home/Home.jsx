import React, { useEffect, useState } from "react";
import cover from "../../../public/images/coverPhoto.jpg";
import card1 from "../../../public/images/food (1).jpeg";
import { Card, CardGroup } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";

const Home = () => {
    const [recipeData, setRecipeData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/data")
        .then((response) => response.json())
        .then((data) => setRecipeData(data));
    }, []);
  
    console.log(recipeData);

    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/data')
    //     .then (res=> res.json())
    //     .then (data => setData (data))
    //     .catch(error => console.error(error))
    // },[])
  return (
    <div>
        
      {/* <img style={{ height: "40px" }} src= alt="" /> */}
      <div>
        <CardGroup>
          <Card>
            {/* <Card.Img variant="top" className="position-absolute w-100 h-100" src={} /> */}
            <Card.Body>
              <Card.Title>{}</Card.Title>
              <Card.Text>
                {chefName}This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default Home;
