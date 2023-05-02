import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import RecipeCard from "../RecipeCard/RecipeCard";
import CardLayout from "../Layout/CardLayout/CardLayout";
import LoginLayout from "../Layout/LoginLayout/LoginLayout";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Blog/Blog";
import Terms from "../T&C/Terms";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,        
      },
      {
        path: "/:id",
        element: (
          <PrivateRoute>
            <RecipeCard></RecipeCard>
          </PrivateRoute>                
        ),
      }, 
      {
        path: '/blog',
        element: <Blog></Blog>
      },          
      
    ],
  },



  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "terms",
        element: <Terms></Terms>
      },
    ],
  },

  

]);

export default router;