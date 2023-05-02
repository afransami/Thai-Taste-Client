import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import RecipeCard from "../RecipeCard/RecipeCard";
import CardLayout from "../Layout/CardLayout/CardLayout";
import LoginLayout from "../Layout/LoginLayout/LoginLayout";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  
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
    ],
  },

  {
    path: "card",
    element: <CardLayout></CardLayout>,
    children: [
      {
        path: "/card",
        element: <Home></Home>
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

]);

export default router;