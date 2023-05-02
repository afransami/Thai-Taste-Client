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

const router = createBrowserRouter([
  {
    path: "/",
    element: <CardLayout></CardLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,        
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <RecipeCard></RecipeCard>
          </PrivateRoute>                
        ),
      },
      
    ],
  },



  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/terms",
        element: <Terms></Terms>
      },
    ],
  },

  

]);

export default router;